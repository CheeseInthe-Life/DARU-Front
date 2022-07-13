import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
// custom-hooks
import useResize from "../../../asset/js/useResize";

// components
import Subtitle from "../../../components/Subtitle";

// imgs
import SearchImage from "../../../asset/imgs/tab_search.svg";

// styled-components
const InputSearch = styled.input`
width: ${(props) => props.width};
height: 45px;
border: 1px solid black;
border-radius: 2px;
padding: 0px 0px 0px 10px;
font-size: 14px;
margin:${(props) => props.margin || ""}
`;

const ButtonSearch = styled.div`
width: 40px;
height:40px; 
background-image: url(${SearchImage});
background-position:center center;
background-repeat: no-repeat;
background-size: cover;
margin-left: 10px;
`;

const BoxSearchResult = styled.div`
display: flex;
flex-direction: ${(props) => props.flexDirection};
width: auto;
border: 1px solid black;
border-radius: 2px;

font-size: 14px;
margin-top:10px;

`;

const BoxResultTitle = styled.div`
width: ${(props) => props.width || "28%"};
height: 45px; 
line-height: 40px; 
font-weight: 500; 
font-size: 16px; 
padding-left: 10px; 
color: #338F6C;  
white-space: wrap;
`;

const BoxResultAddress = styled.div`
line-height: 40px;
height: 100%;
padding-left: 10px;
font-size: 16px;
letter-spacing: -0.5px;
word-break: break-all;
`;

function JoinSearchMyShop(props) {
  const navigate = useNavigate();
  // resize custom hook
  const isMd = useResize();

  return (
    <div className="join-container">
      <Subtitle size={isMd} title="다루에서 우리매장 찾아보기" />
      <h3 style={{
        textAlign: "center", fontSize: "22px", lineHeight: "30px", marginBottom: "30px",
      }}
      >
        혹시 이미 다루에서 확인되고 있는 매장이실 수도 있어요.
        <br />
        {" "}
        한번 검색해보시겠어요?
      </h3>

      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <InputSearch
          placeholder="찻집 이름으로 찾아보기"
          width={isMd == "md" ? "92%" : "83%"}
          onClick={(e) => {
            e.preventDefault();
            console.log(e);
          }}
        />
        <ButtonSearch />
      </div>
      <BoxSearchResult flexDirection={isMd == "md" ? "row" : "column"}>
        <BoxResultTitle width={isMd == "sm" ? "100%" : undefined}>차연 티하우스</BoxResultTitle>

        <BoxResultAddress>
          서울특별시 관악구 신림로 11길 14, 2층
        </BoxResultAddress>
      </BoxSearchResult>

      <div className="join-submit-container">
        <button
          className="white-btn __gray"
          type="button"
          style={{ width: isMd == "sm" ? "100%" : "380px" }}
          onClick={(e) => {
            props.page("/Home/Join/Final");
          }}
        >
          저희 매장은 없는 것 같아요
        </button>
        <button className="green-btn __md" type="button" onClick={(e) => {
          navigate("/Join/Final");
        }}>다루 시작하기</button>
      </div>
    </div>
  );
}

JoinSearchMyShop.propTypes = {
  page: PropTypes.func,
};

export default JoinSearchMyShop;
