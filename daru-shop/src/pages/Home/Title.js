import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "../../asset/scss/article.scss";

// 제목 표시 박스

function Title({ title }) {
  // console.log(title);
  const [isJoin, setIsJoin] = useState("");
  // 제목이 회원 가입이면 inner-box CSS 추가
  useEffect(() => {
    switch (title) {
      case "회원 가입":
        setIsJoin(" __join");
        break;
      case "매장 등록":
        setIsJoin(" __join");
        break;
      case "정보 수정":
        setIsJoin(" __join");
        break;
      case "매장 소식 관리":
        setIsJoin(" __join");
        break;
      case "매장 삭제":
        setIsJoin(" __join");
        break;
      default:
        setIsJoin("");
        break;
    }
  }, [title]);
  return (
    <div className={`home-inner-container-title-box${isJoin}`}>
      <h1>{title}</h1>
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string
};

export default Title;
