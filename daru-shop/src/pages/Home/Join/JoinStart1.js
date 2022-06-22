import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

// custom-hooks
import { useResize } from '../../../asset/js/useResize';

// helpers
import FileHelper from "../../../asset/js/FileHelper";
import ImageHelper from "../../../asset/js/ImageHelper";

// styled components
import { ThumbnailBox, Thumbnail, ThumbnailRemoveButton } from '../../../asset/css_in_js/thumbnailTheme';

// components
import Subtitle from "../../../components/Subtitle";
import Input from "../../../components/Input";
import TimeRadio from '../../../components/TimeRadio';
import KakaoPostButton from '../../../components/KakaoPostButton';
import LongInput from '../../../components/LongInput';
import SelectTel from '../../../components/Home/SelectTel';
import GreenRadioButton from '../../../components/GreenRadioButton';
import TextInfo2 from '../../../components/TextInfo2';


const JoinStart1 = (props) => {
    // resize custom hook
    const isMd = useResize();

    // 카카오 주소 api 추출 데이터
    const [kakaoAddress, setKakaoAddress] = useState({
        zonecode: '',
        address: '',
        addressDetail: '',
    });

    // 대표자본인, 대리인
    const [isMine, setIsMine] = useState(true);
    // 메뉴판 업로드 파일 객체
    const [menuImagesSrc, setMenuImagesSrc] = useState([]);

    // ref
    // 사업자 등록증명 input text ref
    const fileInputRef = useRef();
    // 메뉴 등록증명 input text ref
    const fileMenuTextRef = useRef();
    // 섬네일 input file ref
    const fileMenuRef = useRef();

    // 카카오 주소 얻기
    function getAddress(zonecode, address) {
        const { addressDetail } = kakaoAddress;
        setKakaoAddress({
            zonecode: zonecode,
            address: address,
            addressDetail: addressDetail
        });
    }

    // 카카오 상세주소 얻기
    function getDetailAddress(e) {
        e.preventDefault();
        setKakaoAddress({
            ...kakaoAddress,
            addressDetail: e.currentTarget.value
        });
    }

    // 대표자 본인, 대리인 감지
    useEffect(() => {
        if (isMine === "mine") {
            setIsMine(true);
        } else if (isMine === "notMine") {
            setIsMine(false);
        }
    }, [isMine]);

    return (
        <div className="join-container">
            <div className="join-input-container">
                <Subtitle size={isMd} title="매장 기본정보 등록" />

                <Input sort={isMd} size={isMd} title="매장 상호명" id="userEmail" type="email" placeholder="매장 상호명을 입력하세요." pattern="[^ @]*@[^ @]*" />
                <div className="join-select-box __post">
                    <label className={"input-text-box __label __" + isMd}>매장 주소</label>
                    <input type="text" name="" id="post" className={"input-text-box __text __" + isMd + " __post"} maxLength="4" placeholder="우편번호" onChange={(e) => {
                        e.preventDefault();
                    }} disabled defaultValue={kakaoAddress.zonecode} />
                    <KakaoPostButton size={isMd} value={getAddress} />
                    <LongInput title={""} size={isMd} placeholder="주소" readOnly={false} disabled={true} defaultValue={kakaoAddress.address} />

                    <LongInput title={""} size={isMd} placeholder="상세주소를 입력하세요" onChange={getDetailAddress} />
                </div>

                <div className="join-select-box">
                    <SelectTel size={isMd} title="매장 연락처" />
                </div>

                <div className="join-select-box">
                    <SelectTel size={isMd} title="신청자 연락처" />
                </div>

                <Input sort={isMd} size={isMd} title="업종명" id="userEmail" type="text" placeholder="업종명을 입력하세요." maxLength={10} />

                <div className="join-select-box">
                    <label className={"input-text-box __label __" + isMd} style={{ marginTop: "9px" }}>사업자 등록증 (본인여부) </label>
                    <GreenRadioButton width="" size={"sm"} title={["대표자 본인", "대표자 대리인"]} name={"married"} value={["mine", "notMine"]} getValue={setIsMine} />
                </div>

                {/* 사업자 등록증 */}
                <div className={"filebox __" + isMd}>
                    <input className={"upload-name __" + isMd} type="text" defaultValue={["파일명을 입력하세요"]} ref={fileInputRef} />
                    <label className={"filebox __label __label__" + isMd} htmlFor="file">파일찾기</label>
                    <input name="file" type="file" id="file" onChange={(e) => {
                        e.preventDefault();
                        // 파일 검사
                        // 조건에 맞지 않을 경우 초기화
                        if (!FileHelper.checkFile(e.currentTarget.files, 1)) {
                            e.currentTarget.value = "";
                            fileInputRef.current.value = ["파일명을 입력하세요."]
                        } else {
                            // 출력
                            fileInputRef.current.value = FileHelper.printFileNames(e.currentTarget.files);
                        }
                    }} />
                </div>

                <TextInfo2 size={isMd} title={isMine ? ["사업자 등록증"] : ["사업자 등록증명"]} description={["jpg, jpeg, pdf, png 형태로, 5MB 이내가 되도록 해주세요.\n첨부 서류에 주민번호 뒷자리가 보이지 않도록 해주세요.\n주민번호가 보이는 서류의 경우, 인증 절차가 반려되니 주의하여 주시기 바랍니다.\n본 과정을 통해 진행할 수 없는 경우, 고객센터(1588-1488)에 문의바랍니다."]} />

                {/* 메뉴판 */}
                <div className={"filebox __" + isMd} style={{ marginTop: "15px" }}>
                    <input className={"upload-name __" + isMd + " __menu"} defaultValue={["파일명을 입력하세요."]} ref={fileMenuTextRef} type="text" />
                    <label className={"filebox __label __label__" + isMd}
                        htmlFor="thumbNail">파일찾기</label>

                    <input id="thumbNail" name="thumbNail" type="file" onChange={(e) => {
                        e.preventDefault();
                        // 파일 검사
                        if (!FileHelper.checkFile(e.currentTarget.files, 9, ['jpg', 'jpeg', 'png'])) {
                            // 조건에 맞지 않을 경우 초기화
                            e.currentTarget.value = "";
                            // placeholder 출력
                            fileMenuTextRef.current.value = ["파일명을 입력하세요."];
                        } else {
                            // 출력
                            fileMenuTextRef.current.value = FileHelper.printFileNames(e.currentTarget.files);
                            // 썸네일 출력
                            ImageHelper.getFileImageUrl(e.currentTarget.files, setMenuImagesSrc);
                        }
                    }} multiple ref={fileMenuRef} />
                </div>

                {/* 사진 썸네일 박스, menuImagesSrc */}
                {/*console.log(menuImagesSrc != [])*/}
                {menuImagesSrc !== null && <ThumbnailBox marginLeft={isMd === "md" ? "200px" : "0"} marginBottom={isMd === "md" ? "15px" : "0"} marginTop={isMd === "md" ? "0" : "15px"}>
                    {menuImagesSrc.map((v, i) => {
                        return (
                            <Thumbnail backgroundUrl={v} key={i}>
                                <ThumbnailRemoveButton onClick={(e) => {
                                    e.preventDefault();
                                    // 이미지 파일 삭제 메소드
                                    ImageHelper.deleteFileImages(fileMenuRef, i);
                                    // text 글씨 사라지게 하기
                                    fileMenuTextRef.current.value = FileHelper.printFileNames(fileMenuRef.current.files);
                                    console.log(menuImagesSrc.splice(i, 1));
                                    console.log(menuImagesSrc);
                                    e.currentTarget.parentElement.remove();
                                }} >
                                </ThumbnailRemoveButton>
                            </Thumbnail>
                        )
                    })}
                </ThumbnailBox >}




                <TextInfo2 size={isMd} title={["메뉴판 등록(최대 9개까지)"]} description={["jpg, jpeg, png 형태로, 5MB 이내가 되도록 해야합니다. \n 매장 상호가 차와 관련되어 있거나 매장에서 다루는 음료 메뉴의 3/4 이상이 차, 차와 관련된 메뉴여야 합니다. \n 본 메뉴판은 실제로 매장에서 사용하는  메뉴판이어야하며, 추후 감사를 통해서 제출하신 메뉴판과 다르면 불이익이 있을 수 있습니다. \n 메뉴판 허위 등록에 따라 발생하는 불이익은 당사자에게 책임이 있다는 점을 고지드립니다. "]} />

                <div style={{ marginBottom: "20px" }}>
                    <TimeRadio size={isMd} />
                    <TimeRadio title="" size={isMd} subtitle="화요일" id="Tues" name="Tue" />
                    <TimeRadio title="" size={isMd} subtitle="수요일" />
                    <TimeRadio title="" size={isMd} subtitle="목요일" />
                    <TimeRadio title="" size={isMd} subtitle="금요일" />
                    <TimeRadio title="" size={isMd} subtitle="토요일" />
                    <TimeRadio title="" size={isMd} subtitle="일요일" />
                </div>


                <Input sort={isMd} size={isMd} title="Instagram" id="userEmail" type="text" placeholder="Instagram 주소 명을 입력하세요" maxLength={10} />

                <Input sort={isMd} size={isMd} title="기타 찻집 링크" id="userEmail" type="text" placeholder="홈페이지 링크, 네이버 블로그 링크 등" maxLength={10} />
            </div>
            <div className="join-submit-container">
                <button type="button" className="green-btn __md" onClick={(e) => {
                    props.page("/Home/Join/Start2");
                }}>다루 시작하기</button>
            </div>
        </div >
    );
};




export default JoinStart1;