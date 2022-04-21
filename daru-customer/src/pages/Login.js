import React from "react";

import { Link } from "react-router-dom";

import "../asset/Login.scss";
import Buttons from "../components/Buttons";


const Login = () => {
  return (
    <div className="login container">
      <div className="login logo-container">
        <div className="login logo-container logo"></div>
      </div>

      <div className="login login-container">
        <h1>찻집 가맹점 관리 페이지</h1>
        <input
          className="login-container login-inputs"
          type="text"
          placeholder="아이디를 입력하세요"
        />

        <p className="login">ID</p>

        <input
          className="login-container login-inputs"
          type="password"
          placeholder="비밀번호를 입력하세요"
        />
        <p className="login">Password</p>

        <Buttons
          color="green"
          trans = "ivory"
          sentence="로그인하기"
          urls="Authent"
        ></Buttons>
         <Buttons
          color="gray"
          sentence="회원가입하기"
          urls="Join"
        ></Buttons>

        <Link to="/Find_ID" className="login finds">
          아이디찾기
        </Link>
        <Link to="/Find_PW" className="login finds">
          비밀번호찾기
        </Link>
      </div>
    </div>
  );
};

export default Login;
