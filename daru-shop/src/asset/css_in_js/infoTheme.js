// user/info에 적용될 styled components

import styled from "styled-components";

// info-container
const BoxShopInfo = styled.div`
display:flex;
flex-direction:${props => props.flexDirection || 'column'};
position: relative;
width: 100%;
height: ${props => props.height};
background-color: white;
margin:"0px 0px 30px 0px";
// border-bottom: 0.5px solid ;
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

// 실제 정보가 표시될 리스트들
const BoxInfoInnerList = styled.li`
display: flex;
align-items: center;
width: 100%;
border-bottom: 1px solid black;
box-sizing: border-box;
// 하위 info-address에 적용될 클래스
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
// 연락처, 인스타그램계정 인풋
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
// 기타 홈페이지 링크 인풋 textarea처리
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
// 반응형
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


export { BoxShopInfo, BoxInfo, BoxInfoInnerBox, BoxInfoInnerBoxText, BoxInfoInnerLists, BoxInfoInnerList };