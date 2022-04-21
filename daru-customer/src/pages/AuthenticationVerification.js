import React from "react";

import "../asset/Authentication.scss";

import BackButton from "../components/BackButton";
import Buttons from "../components/Buttons";

const AuthenticationVerification = () => {
  return (
    <div className="authent container">
      <BackButton></BackButton>
      <h1 className="authent">아직 가게 인증을 안하셨나요?</h1>
      <Buttons sentence="가게인증 하러가기" urls="AuthenticJoin"></Buttons>
    </div>
  );
};

export default AuthenticationVerification;
