import React, { useState, useEffect } from 'react';

import styled from 'styled-components'

import Subtitle from "../../../components/Subtitle";
import Input from "../../../components/Input";
import TimeRadio from '../../../components/TimeRadio';
import KakaoPostButton from '../../../components/KakaoPostButton';
import LongInput from '../../../components/LongInput';
import SelectTel from '../../../components/Home/SelectTel';
import GreenRadioButton from '../../../components/GreenRadioButton';
import TextInfo2 from '../../../components/TextInfo2';

const JoinStart1 = (props) => {
    // windowSize가 821미만이면 모바일
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
    });
    const [isMd, setIsMd] = useState(
        windowSize.width < 821 ? "sm" : "md"
    );
    // resize이벤트가 발생할때 사용할 콜백함수
    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth
        })
    };

    // resize 이벤트 발생 시 이벤트 감지
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    // width가 821미만이라면 sm사이즈 scss 클래스 불러오기
    useEffect(() => {
        if (windowSize.width < 821) {
            setIsMd("sm")
        } else {
            setIsMd("md")
        }
    }, [windowSize])

    return (
        <div className="join-container">
            <div className="join-input-container">
                <Subtitle size={isMd} title="매장 기본정보 등록" />
                <Input sort={isMd} size={isMd} title="이메일" id="userEmail" type="email" placeholder="가입에 사용하신 이메일을 입력하세요." pattern="[^ @]*@[^ @]*" />
                <div className="join-select-box __post">
                    <label className={"input-text-box __label __" + isMd}>매장 주소</label>
                    <input type="text" name="" id="post" className={"input-text-box __text __" + isMd + " __post"} maxLength="4" placeholder="주소를 검색하세요" onChange={(e) => {
                        e.preventDefault();
                    }} />
                    <KakaoPostButton size={isMd} />
                    <LongInput title={""} size={isMd} placeholder="상세주소를 입력하세요" readOnly={false} />
                </div>
                <div className="join-select-box">
                    <SelectTel size={isMd} title="매장 연락처" />
                </div>
                <div className="join-select-box">
                    <SelectTel size={isMd} title="신청자 연락처" />
                </div>
                <Input sort={isMd} size={isMd} title="업종명" id="userEmail" type="text" placeholder="업종명을 입력하세요." maxLength={10} />
                <div className="join-select-box">
                    <label className={"input-text-box __label __" + isMd}>사업자 등록증 (본인여부) </label>
                    <GreenRadioButton width="" size={"sm"} title={["대표자 본인", "대표자 대리인"]} name={"married"} />
                </div>
                <div className={"filebox __" + isMd}>
                    <input className={"upload-name __" + isMd} defaultValue="첨부파일을 넣어주세요" />
                    <label className={"filebox __label __label__" + isMd} htmlFor="file">파일찾기</label>
                    <input type="file" id="file" />
                </div>
                <TextInfo2 size={isMd} title={["사업자 등록증"]} description={["jpg, jpeg, pdf, png 형태로, 5MB 이내가 되도록 해주세요.\n첨부 서류에 주민번호 뒷자리가 보이지 않도록 해주세요.\n주민번호가 보이는 서류의 경우, 인증 절차가 반려되니 주의하여 주시기 바랍니다.\n본 과정을 통해 진행할 수 없는 경우, 고객센터(1588-1488)에 문의바랍니다."]} />
                <div style={{ display: "flex", flexDirection: "column", marginBottom: "15px" }}>
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
                <button className="green-btn __md" type="submit" onClick={() => {
                    props.page("/Join/Start2")
                }}>다루 시작하기</button>
            </div>
        </div >
    );
};

export default JoinStart1;