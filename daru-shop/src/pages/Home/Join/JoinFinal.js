import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
// custom-hooks
import useResize from "../../../asset/js/useResize";

// styled-components
const MainLink = styled(Link)`
    display:flex;
    align-items: center;
    justify-content: center;
    width:${(props) => props.width || "380px"};
    height:48px;
    font-size: 20px;
    color:white;
    background-color:#4DAF9A;
    border: 1px solid $GRAY-6;
    border-radius: 2px;
    text-decoration: none;
    cursor: pointer;
    margin: 0 auto;
    margin-bottom: 55px;
`;
function JoinFinal(props) {
  // resize custom hook
  const isMd = useResize();

  useEffect(() => {
    props.title("회원 가입");
  }, []);

  return (
    <React.Fragment>
      <div className="join-inner-container">
        <article className="join-final-article">
          <div className="join-final-img" />
          <span className="find-input-container-text">정보 설정이 완료되었습니다.</span>
          <span className="find-input-container-text">매장 심사 결과가 나오기까지</span>
          <span className="find-input-container-text">최대 2일정도 소요됩니다.</span>
          <span className="find-input-container-text" style={{ marginBottom: "40px" }}>
            감사합니다.
          </span>
          <MainLink to="/User/News?id=1" width={isMd == "sm" ? "300px" : undefined}>
            다루 매장 전용페이지로
          </MainLink>
        </article>

      </div>
    </React.Fragment>
  );
}

JoinFinal.propTypes = {
  title: PropTypes.func
};


export default JoinFinal;
