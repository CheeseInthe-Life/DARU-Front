import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// custom-hooks
import useResize from "../../../../asset/js/useResize";

// styled-components
const MainLink = styled(Link)`
    display:flex;
    padding: 0;
    margin-bottom: 100px;
    align-items: center;
    justify-content: center;
    width:${(props) => props.width};
    height:48px;
    font-size: 20px;
    color:white;
    background-color:#4DAF9A;
    border: 1px solid $GRAY-6;
    border-radius: 2px;
    text-decoration: none;
    cursor: pointer;
`;

function FinalFindPw(props) {
  // custom-hooks
  const isMd = useResize();

  return (
    <>
      <article className="find-article" style={{ border: "none" }}>
        <span className="find-input-container-text">비밀번호를 성공적으로</span>
        <span className="find-input-container-text">
          새로 설정하였습니다.
        </span>
      </article>
      <MainLink width={isMd === "md" ? "380px" : "320px"} to="/">
        메인으로 돌아가기
      </MainLink>
    </>
  );
}

export default FinalFindPw;
