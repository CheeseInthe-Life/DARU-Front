// thumbnail에 사용될 styled-components
import styled from "styled-components";

// imgs
import removeButtonImage from '../imgs/tab_reset.svg';

// thumbnail 큰박스
const ThumbnailBox = styled.div`
display:flex;
flex-direction:row;
flex-wrap: wrap;

margin-left: ${props => props.marginLeft || "200px"}; 
margin-bottom: ${props => props.marginBottom || "15px"};
margin-top : ${props => props.marginTop || "15px"};
`
// thumbnail 하나하나의 요소
const Thumbnail = styled.div`
width: 56px;
height: 56px;
border:1px solid #f2f2f2;
border-radius: 10px;
margin: 2.5px; 

background-image: url(${props => props.backgroundUrl || ""});
background-size: cover;
background-repeat: no-repeat center;
`;

// thumbnail 삭제 버튼
const ThumbnailRemoveButton = styled.div`
width: 20px;
height: 20px;
background-image: url(${removeButtonImage});
background-size: cover;
float: right;
`;


export { ThumbnailBox, Thumbnail, ThumbnailRemoveButton }

