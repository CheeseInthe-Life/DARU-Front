import React, { useState, useEffect } from 'react';
import styled from "styled-components";

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
// info-container
const BoxShopInfo = styled.div`
display:flex;
flex-direction:column;
position: relative;
width: 100%;
height: ${props => props.height};
background-color: white;
margin:"0px 0px 30px 0px";
border-bottom: 0.5px solid ;
`;
// 첫번째 매장 정보 박스
const BoxInfo = styled.div`
display: flex;
flex-direction: ${props => props.flexDirection};
box-sizing: border-box; 
padding: ${props => props.padding};

`
// 매장 정보 박스 안 매장 이름, 티하우스 표시 박스
const BoxInfoInnerBox = styled.div`
width: 100%;
max-width: ${props => props.maxWidth};
height: ${props => props.height};
background-color: white;
margin-bottom: 25px;
position: relative;
border-radius: 8px;
box-shadow: 0px 1px 3px 1px #b5b5b5;
`;
// 매장 정보 박스 안 매장 이름 티하우스 이름 글자
const BoxInfoInnerBoxText = styled.span`
position: absolute;
top: ${props => props.top};
left: ${props => props.left || "20px"};
color: ${props => props.color}; 
font-weight: 600;
font-size: ${props => props.fontSize}; 
`;
// 주소, 업종, 연락처 등을 담을 list의 박스
const BoxInfoInnerLists = styled.ul`
width: 100%;
height: auto;
background-color: ""; 
padding-left: ${props => props.paddingLeft};
`;

const BoxInfoInnerList = styled.li`
display: flex;
align-items: center;
width: 100%;
border-bottom: 1px solid black;
box-sizing: border-box;



.info-address{
    width: 100%;
    color:#6A6A6A;
    height: 100%
    font-size:18px;
    height:auto;
    padding: 5px 0px;
}

// 주소, 업종등 
.info-inner__text{
width: 200px;
font-size: 18px;
font-weight: 700;
letter-spacing: -0.5px;
}

.info-inner__input__text{
line-height: 18px;
letter-spacing: -0.5px;
color:#6A6A6A;
width: 100%;
height: 35px;
font-size:16px;
border: none;
margin: 10px 0px;

    &:disabled{
        background:white;
    }
}
.info-inner__input__textarea{
    font-family: 'Noto Sans KR', sans-serif;
    width: 100%;
    height: 35px;
    font-size:16px;
    margin: 10px 0px;
    resize: none;
    color:#6A6A6A;
    line-height: 30px;
    &:disabled{
        background:white;
    }
}

@media screen and (max-width: 821px) {
    .info-address{
        font-size: 15px;
    }
    .info-inner__text{
        font-size: 16px;
    }
    .info-inner__input__text{
        font-size: 14p5;
    }
}
`;


const UserInfo = () => {
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
        });
    };

    // resize 이벤트 발생 시 이벤트 감지
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    useEffect(() => {
        if (windowSize.width < 821) {
            setIsMd("sm");
        } else {
            setIsMd("md");
        }
    }, [windowSize]);
    return (
        <React.Fragment>
            {/* 모바일 사이즈에서만 표시 */}
            {isMd === "sm" && (<div style={{ width: "105px", margin: "0 auto" }}>
                <Title title={"정보 수정"} />
            </div>)}


            <BoxShopInfo height="100%">
                <Subtitle title="매장 정보" />
                <BoxInfo flexDirection={isMd == "md" ? 'row' : 'column'}>
                    {/* 수정버튼 */}
                    <button className={"small-btn __" + (isInfoUpadte ? "green" : "white")} style={{ position: "absolute", top: "40px", right: "0" }} onClick={(e) => {
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
                <button className={"small-btn __" + (isIntroduceUpdate ? "green" : "white")} style={{ position: "absolute", top: "40px", right: "0" }} onClick={(e) => {
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
                </div>


            </BoxShopInfo>
            <BoxShopInfo>
                <Subtitle title="매장 상단 배너 이미지(최대 9개)" />
            </BoxShopInfo>
            <BoxShopInfo>
                <Subtitle title="메뉴판 이미지(최대 9개)" />
            </BoxShopInfo>
            <BoxShopInfo>
                <Subtitle title="매장 인증 여부" />
                <div>

                </div>
            </BoxShopInfo>
        </React.Fragment >
    );
};

export default UserInfo;