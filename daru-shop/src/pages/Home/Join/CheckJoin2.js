import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom"
import styled from 'styled-components'

import Subtitle from "../../../components/Subtitle";
import CheckBox from '../../../components/CheckBox';


// styled components
const JoinDiv = styled.div`
width: auto;
height: 70px;
background-color: rgb(242,242,242);
margin-top:40px;
margin-bottom:50px;
padding:10px;
line-height:125px;
`;

const InfoBox = styled.div`
// width: ${props => props.width || '700px'};
width: auto;
height: 100%;
background-color: #F8F8F8;
margin: 0 auto;
margin-top: 30px;
padding: 20px;
line-height: 20px;
`;

const InnerBox = styled.div`
padding: 10px;
max-width: 358px;
height: 100%;
background-color:white;
margin: 0 auto;
margin-top: 30px;
margin-bottom: 30px;
`;

const InfoBoxSpan = styled.span`
font-size:${props => props.fontSize};
color:#6A6A6A;
`

const InfoHeaderStyle = {
    textAlign: "center", marginBottom: "10px"
}
const InfoSpanStyle = {
    fontSize: "14px", marginBottom: "10px", display: "inline-block"
}



const CheckJoin2 = (props) => {
    const navigate = useNavigate();
    const [isCheck, setIsCheck] = useState(false);




    // mediaQuery가 821미만이면 모바일
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
    }, []);
    // 821 미만이면 sm , md
    useEffect(() => {
        (windowSize.width < 821) ?
            setIsMd("sm")
            :
            setIsMd("md")

    }, [windowSize]);

    // resize 이벤트 발생 시 이벤트 감지
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        console.log(1);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    useEffect(() => {
        console.log(isCheck);
    }, [isCheck]);

    return (
        <div className="join-container">
            <Subtitle size={isMd} title="다루에 입점할 수 있는 매장 조건" />
            <span style={isMd == "md" ? { fontSize: "16px", lineHeight: "30px" } : { fontSize: "14px", lineHeight: "20px" }}>
                ‘세상의 모든 찻집을 다루다, 다루’에서는  다루 매장으로 찻집 혹은 차를 많이 파는 티 카페를 위주로 매장을 등록하고 있습니다.<br />
                매장 심사를 통과하기 위해서는 아래의 조건 중 <strong><u>1개 이상 부합</u></strong>해야만 합니다.
            </span>
            <InfoBox>
                <InfoBoxSpan fontSize={isMd === "sm" ? "14px" : "16px"}>
                    1.  사업자 등록증에 적힌 매장의 이름, 혹은 현재 운영 중인 매장의 이름이 ‘차 관련 단어를 포함하고 있는 경우
                </InfoBoxSpan>
                <InnerBox>
                    <h5 style={InfoHeaderStyle}>
                        차 관련 단어 예시
                    </h5>

                    <span style={{ fontSize: "14px" }}>
                        찻집, 차, 티하우스(Tea House), 티룸(Tea Room), 티카페(Tea Cafe), 티 칵테일, 티 바(Tea Bar),티, 보이차, 녹차, 전통차, 전통찻집, 차 문화, 홍차, 밀크티
                    </span>
                </InnerBox>
                <InfoBoxSpan fontSize={isMd === "sm" ? "14px" : "16px"}>
                    2. 매장에서 취급하고 있는 메뉴판(현재 메뉴판 기준)에서 3/4 이상이 차, 티(Tea), 티 베리에이션 항목에 해당하는 경우
                </InfoBoxSpan>

                <InnerBox>
                    <h5 style={InfoHeaderStyle}>
                        해당 메뉴 예시
                    </h5>
                    <span style={InfoSpanStyle}>
                        1. 기본 차 종류 : 보이차, 녹차, 백차, 캐모마일, 루이보스, 홍차, 블렌딩 티, 얼그레이,  허브티, 자스민, 페퍼민트,  로즈마리 등<br />
                        2. 티 베리에이션 : 밀크티, 티 칵테일, 과일과 혼합된 티, 그린티라떼, 홍차라떼, 차이티, 차가 결합된 드링크(스무디, 라떼, 프라프치노)<br />
                        3. 한방차(인삼차, 생강차 등), 과실청차(레몬차, 유자차, 레몬청차, 매실차 등)
                    </span>

                    <h5 style={InfoHeaderStyle}>
                        해당되지 않는 메뉴 예시
                    </h5>

                    <span style={InfoSpanStyle}>
                        레몬 에이드, 딸기 에이드, 와인, 커피, 디저트, 카페라떼, 초코라떼, 아이스티, 스무디,  카라멜 마끼야또, 바닐라 라떼,  생과일주스, 스무디, 고구마 라떼,  핫초코, 프라프치노,
                    </span>
                </InnerBox>

                <InfoBoxSpan fontSize={isMd === "sm" ? "14px" : "16px"}>
                    3. 프랜차이즈 매장의 경우, contact@daruteaworld.com 으로 별도 문의 부탁드립니다.
                </InfoBoxSpan>

            </InfoBox>
            <JoinDiv>
                <CheckBox title="상기에 제시된 조건에 해당합니다." setChangeValue={setIsCheck} checked={isCheck}></CheckBox>
            </JoinDiv>


            {isCheck && <button className="green-btn __md" style={{ margin: "0 auto" }} onClick={(e) => {
                navigate("/Join/Start");
            }}>다음</button>}
        </div>
    );
};

export default CheckJoin2;