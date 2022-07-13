// user에 적용될 styled components

import styled from "styled-components";

// info-container
const BoxShop = styled.div`
display:flex;
flex-direction:${(props) => props.flexDirection || "column"};
position: relative;
width: 100%;
height: ${(props) => props.height};
background-color: white;
margin:"0px 0px 30px 0px";
box-sizing: border-box;
`;

// 첫번째 매장 정보 박스
const BoxInfo = styled.div`
display: flex;
flex-direction: ${(props) => props.flexDirection};
box-sizing: border-box; 
padding: ${(props) => props.padding};
`;
// 매장 정보 박스 안 매장 이름, 티하우스 표시 박스
const BoxInfoInnerBox = styled.div`
width: 100%;
max-width: ${(props) => props.maxWidth};
height: ${(props) => props.height};
background-color: white;
margin-bottom: 25px;
position: relative;
border-radius: 8px;
box-shadow: 0px 1px 3px 1px #b5b5b5;
`;

// 매장 정보 박스 안 매장 이름 티하우스 이름 글자
const BoxInfoInnerBoxText = styled.span`
position: absolute;
top: ${(props) => props.top};
left: ${(props) => props.left || "20px"};
color: ${(props) => props.color}; 
font-weight: 600;
font-size: ${(props) => props.fontSize}; 
`;

// 주소, 업종, 연락처 등을 담을 list의 박스
const BoxInfoInnerLists = styled.ul`
width: 100%;
height: auto;
background-color: ""; 
padding-left: ${(props) => props.paddingLeft};
`;

const BoxNews = styled.div`
    display: flex;
    // flex-direction: isMd === "md" ? "row" : "column";
    flex-direction: ${(props) => props.flexDirection};
    width: 100%;
    margin: 0px 0px 30px 0px;
    box-sizing: border-box;
    justify-content: space-between;
`;
const BoxNewsInfo = styled.div`
    position: relative;
    box-sizing: border-box;
    // width: isMd == "md" ? "390px" : "100%",
    width: ${(props) => props.width};
    height: 159px;
    border: 1px solid #BABABA;
    border-radius: 10px;
    box-shadow: 0px 2px 4px #BABABA;
    // marginBottom: isMd === "md" ? "0px" : "15px"
    margin-bottom: ${(props) => props.marginBottom}
`;

const BoxNewsCountImgs = styled.span`
width: 15px;
height: 15px;
position: absolute;
top: 104px;
left: 34px;
background: url(${(props) => props.backgroundUrl}) center no-repeat;
`;

const BoxNewsImgs = styled.div`
width: 80px;
height: 110px;
position: absolute;
top: 23px;
right: 34px;
background: url(${(props) => props.backgroundUrl}) center no-repeat;
`;

// 작성 순, 인기 순, 몇개씩보기드롭다운 박스
const BoxNewsSort = styled.div`
display: flex;
// flex-direction: isMd === "md" ? "row" : "column";
flex-direction: ${(props) => props.flexDirection};
width: 100%;
box-sizing: border-box;
padding: 0px 10px;
margin: -10px 0px 10px 0px;
`;
// 그 안의 박스
const BoxNewsSortInnerBox = styled.div`
display: flex; 
// flexDirection: isMd === "md" ? "" : "row" 
flex-direction: ${(props) => props.flexDirection};
`;
// check박스
const BoxNewsSortInnerBoxCheck = styled.div`
display: flex; 
flex-direction: row;
// align-items: isMd === "md" ? "center" : "";
align-items: ${(props) => props.alignItems};
margin: 15px 30px 10px 0px;
position: relative;
`;

const BoxNewsCheckBoxImg = styled.div`
background: url(${(props) => props.backgroundUrl}) center no-repeat;
width: 18px;
height: 18px;
`;

const BoxNewsPostingInnerBox = styled.div`
float: left;
box-sizing: border-box;
// width: isMd === "md" ? "350px" : "300px",
width: ${(props) => props.width};
border-radius: 8px;
border: 1px solid #BABABA;
box-shadow: 0px 1px 2px #BABABA;
// margin: isMd === "md" ? "5px 25px" : "5px 0px";
margin: ${(props) => props.margin};
padding: 10px 10px 0px 10px; 
`;

const MenuListIcon = styled.div`
float: right;
margin: 10px 0px 10px 0px;
background: url(${(props) => props.backgroundUrl})  no-repeat center;
width: 10px;
height: 30px;
backgroundSize: cover;
`;

const BoxImageLabel = styled.div`
width: 20px;
height: 15px;
background: url(${(props) => props.backgroundUrl}) no-repeat center center;
`;

export {
  BoxShop, BoxInfo, BoxInfoInnerBox, BoxInfoInnerBoxText, BoxInfoInnerLists, BoxNews, BoxNewsInfo, BoxNewsImgs, BoxNewsCountImgs, BoxNewsSort, BoxNewsSortInnerBox, BoxNewsSortInnerBoxCheck, BoxNewsCheckBoxImg, BoxNewsPostingInnerBox, MenuListIcon, BoxImageLabel,
};
