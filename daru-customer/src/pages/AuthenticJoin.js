import React from "react";

import "../asset/AuthenticJoin.scss";

import BackButton from "../components/BackButton";
import Buttons from "../components/Buttons";

const AuthenticJoin = () => {
  return (
    <div className="authenticjoin container">
      <div className="authenticjoin inner-container">
        <BackButton></BackButton>
        <h1>다음의 내용을 채워주세요</h1>
        <h3>매장 상호명</h3>
        <input type="text" placeholder="아이디를 입력해주세요" />
        <h3>주소</h3>
        <input type="text" placeholder="주소를 입력해주세요" />
        <h3>가게 연락처</h3>
        <input type="text" placeholder="가게 연락처를 입력해주세요" />
        <h3>신청자 연락처</h3>
        <input type="text" placeholder="신청자 연락처를 입력해주세요" />
        <h3>업종명</h3>
        <input type="text" placeholder="업종명을 입력해주세요" />

        <Buttons sentence="다음" urls="Business"></Buttons>
      </div>
    </div>
  );
};

export default AuthenticJoin;
