import React, { useState, useEffect } from 'react';
import styled from "styled-components";

// helper(custom hooks)
import { useResize } from "../../asset/js/useResize";

//img
import imageHouse from "../../asset/imgs/img_house.svg";

//components
import Subtitle from '../../components/Subtitle';
import TextArea from '../../components/Home/TextArea';
import GreenCheckBoxs from "../../components/GreenCheckBoxs";
import GreenRadioButton from "../../components/GreenRadioButton";
import TimeRadio from '../../components/TimeRadio';
import Title from "../../pages/Home/Title";

// styled-components
import { BoxInfo, BoxShopInfo, BoxInfoInnerBox, BoxInfoInnerBoxText, BoxInfoInnerLists, BoxInfoInnerList } from "../../asset/css_in_js/infoTheme";
import { Thumbnail, ThumbnailRemoveButton, ThumbnailBox } from "../../asset/css_in_js/thumbnailTheme";


const UserInfo = () => {
    // resize custom hooks
    const isMd = useResize();
    // 연락처, 인스타그램계정, 기타홈페이지 링크 업데이트
    const [isInfoUpadte, setIsInfoUpadte] = useState(true);
    // 매장소개 업데이트 
    const [isIntroduceUpdate, setIsIntroduceUpdate] = useState(true);

    // 매장 소개 defaultValue 
    const [introduceData, setIntroduceData] = useState("");


    // 매장 소개 데이터 변경하기
    function changeIntroduceData(e) {
        e.preventDefault();
        setIntroduceData(e.currentTarget.value);
    }

    return (
        <React.Fragment>
            {/* 모바일 사이즈에서만 표시 */}
            {isMd === "sm" && (<div style={{ margin: "0 auto" }}>
                <Title title={"정보 수정"} />
            </div>)}


            <BoxShopInfo height="100%">
                <Subtitle title="매장 정보" />
                <BoxInfo flexDirection={isMd == "md" ? 'row' : 'column'}>
                    {/* 수정버튼 */}
                    <button className={"small-btn __" + (isInfoUpadte ? "green" : "white") + " __info"} onClick={(e) => {
                        e.preventDefault();
                        setIsInfoUpadte(!isInfoUpadte);
                    }}>{isInfoUpadte ? "수정" : "수정 완료"}</button>
                    {/* 매장 이름 */}
                    <BoxInfoInnerBox maxWidth={isMd == "md" ? "350px" : "100%"} height={isMd == "md" ? "300px" : "200px"}>
                        <BoxInfoInnerBoxText top={"30px"} fontSize={"18px"} color={"#b5b5b5"}>매장 이름</BoxInfoInnerBoxText>
                        <BoxInfoInnerBoxText top={"60px"} fontSize={"24px"} color={"black"}>00 티하우스</BoxInfoInnerBoxText>
                        <img src={imageHouse} alt="" style={{ position: "absolute", bottom: "25px", right: "25px" }} />
                    </BoxInfoInnerBox>

                    {/* 주소, 업종 리스트들 */}
                    <BoxInfoInnerLists paddingLeft={isMd == "md" ? "40px" : "0px"}>
                        <BoxInfoInnerList style={{ height: "auto", }}>
                            <span className="info-inner__text">주소</span>
                            <span className="info-address">서울시 영등포구 어쩔동 어쩔로 2118012서울시 영등포구 어쩔동 어쩔로 2118012서울시 영등포구 어쩔동 어쩔로 2118012서울시 영등포구 어쩔동 어쩔로 2118012</span>
                        </BoxInfoInnerList>
                        <BoxInfoInnerList>
                            <span className="info-inner__text">업종</span>
                            <input type="text" className="info-inner__input__text" value={"요식업"} disabled />
                        </BoxInfoInnerList>
                        <BoxInfoInnerList>
                            <span className="info-inner__text">연락처</span>
                            <input type="text" className="info-inner__input__text" style={{ border: !isInfoUpadte ? "1px solid #BABABA" : "1px solid white", borderRadius: "2px" }} type="text" defaultValue={"D"} disabled={isInfoUpadte} />
                        </BoxInfoInnerList>
                        <BoxInfoInnerList>
                            <span className="info-inner__text">인스타그램 계정</span>
                            <input className="info-inner__input__text" style={{ border: !isInfoUpadte ? "1px solid #BABABA" : "1px solid white", borderRadius: "2px" }} type="text" defaultValue={"D"} disabled={isInfoUpadte} />
                        </BoxInfoInnerList>
                        <BoxInfoInnerList>
                            <span className="info-inner__text">기타 홈페이지 링크</span>
                            <textarea className="info-inner__input__textarea" style={{ border: !isInfoUpadte ? "1px solid #BABABA" : "1px solid white", borderRadius: "2px" }} defaultValue={"D"} disabled={isInfoUpadte} />
                        </BoxInfoInnerList>
                    </BoxInfoInnerLists>
                </BoxInfo>
            </BoxShopInfo>
            <BoxShopInfo>
                <Subtitle title="매장 소개" />
                <button className={"small-btn __" + (isIntroduceUpdate ? "green" : "white") + " __info"} onClick={(e) => {
                    e.preventDefault();
                    e.currentTarget.nextElementSibling.focus();
                    setIsIntroduceUpdate(!isIntroduceUpdate);
                }}>{isIntroduceUpdate ? "수정" : "수정 완료"}</button>
                <TextArea readOnly={isIntroduceUpdate} value={introduceData} onChange={changeIntroduceData} />
            </BoxShopInfo>
            <BoxShopInfo>
                <Subtitle title="매장 카테고리 관리 (최대 4개)" />
                <GreenCheckBoxs ></GreenCheckBoxs>
            </BoxShopInfo>
            <BoxShopInfo>
                <Subtitle title="현재 우리 매장은 어떤 모습인가요?(1개 선택)" />
                <GreenRadioButton title={["손님이 직접 다구를 사용해서 차를 내려먹는 전통찻집", "손님이 직접 다구를 사용할 일은 없지만, 자사호와 찻잔을 활용해서 차를 내려먹는 찻집 대리인", "손님이 직접 차를 우려먹지는 않지만, 찻잎이나 청을 이용해서 직접 차를 만들어 제공하는 찻집", "서양풍의 인테리어에 하얀 주전자에 차를 담아 판매하는 티카페", "현대의 카페와 거의 유사한 인테리어이지만, 차를 위주로 판매하고 있는 티카페"]} name={"d"} />
            </BoxShopInfo>
            <BoxShopInfo>
                <Subtitle title="운영 시간" />
                <div>
                    <TimeRadio size={isMd} page={"info"} />
                    <TimeRadio title="" size={isMd} subtitle="화요일" id="Tues" name="Tue" page={"info"} />
                    <TimeRadio title="" size={isMd} subtitle="수요일" page={"info"} />
                    <TimeRadio title="" size={isMd} subtitle="목요일" page={"info"} />
                    <TimeRadio title="" size={isMd} subtitle="금요일" page={"info"} />
                    <TimeRadio title="" size={isMd} subtitle="토요일" page={"info"} />
                    <TimeRadio title="" size={isMd} subtitle="일요일" page={"info"} />
                    <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "auto", borderBottom: "1px solid #dbdbdb" }}>
                        <span style={{ height: "", fontWeight: 700, color: "#338f6c", margin: isMd === "md" ? "20px 0px 15px 0px" : "10px 0px", }}>기타 사항</span>
                        <textarea style={{ width: "100%", height: "150px", resize: "none", fontFamily: "Noto Sans KR", boxSizing: 'border-box', padding: "10px" }} defaultValue={"이번주는 쉬어가겠습니다"} />
                    </div>
                </div>
            </BoxShopInfo>

            <BoxShopInfo>
                <Subtitle title="매장 상단 배너 이미지(최대 9개)" />
                <div style={{ display: "flex" }}>
                    <ThumbnailBox marginLeft={"0"}>
                        <div style={{ position: "relative" }}>
                            <Thumbnail onClick={(e) => { console.log(1); }} />
                            <ThumbnailRemoveButton style={{ position: "absolute", top: "3px", right: "3px" }} />
                        </div>

                    </ThumbnailBox>
                    <ThumbnailBox marginLeft={"0"}>
                        <Thumbnail>
                            <ThumbnailRemoveButton></ThumbnailRemoveButton>
                        </Thumbnail>
                    </ThumbnailBox>
                    <ThumbnailBox marginLeft={"0"}>
                        <Thumbnail>
                            <ThumbnailRemoveButton></ThumbnailRemoveButton>
                        </Thumbnail>
                    </ThumbnailBox>
                    <ThumbnailBox marginLeft={"0"}>
                        <Thumbnail>
                            <ThumbnailRemoveButton></ThumbnailRemoveButton>
                        </Thumbnail>
                    </ThumbnailBox>
                </div>

            </BoxShopInfo>
            <BoxShopInfo>
                <Subtitle title="메뉴판 이미지(최대 9개)" />
            </BoxShopInfo>
            <BoxShopInfo>
                <Subtitle title="매장 인증 여부" />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: "auto", height: "200px", border: "1px solid #828282", borderRadius: "2px", boxSizing: "border-box", marginBottom: "130px" }}>
                    {/* <span style={{ marginTop: "20px", fontSize: "22px", fontWeight: 700, letterSpacing: "-0.5px", color: "#3DA38D" }}>인증 완료</span> */}
                    <span style={{ marginTop: "20px", fontSize: "22px", fontWeight: 700, letterSpacing: "-0.5px", color: "#BB9068" }}>인증 반려</span>
                    {/* <span style={{ marginTop: "20px", fontSize: "22px", fontWeight: 700, letterSpacing: "-0.5px", color: "#6A6A6A" }}>인증 반려</span> */}
                    <span style={{ fontSize: "18px", fontWeight: 500, marginTop: "20px" }}>다루 매장으로 등록되었습니다.</span>
                    <span style={{ fontSize: "18px", fontWeight: 500, marginTop: "20px" }}></span>
                    <button style={{ marginTop: "20px", fontSize: "18px" }} className={`white-btn ${isMd === "md" ? "__lg" : "__md"} __gray`}>다시 인증하기</button>
                </div>
            </BoxShopInfo>
        </React.Fragment >
    );
};

export default UserInfo;