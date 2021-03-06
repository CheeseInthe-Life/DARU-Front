import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


// custom-hooks
import useResize from "../../asset/js/useResize";

// alert
import { SwalAlert } from "../../asset/js/AlertHelper";

// SCSS

import "../../asset/scss/article.scss";
import "../../asset/scss/pages/join.scss";
import Input from "../../components/Input";
import CheckBox from "../../components/CheckBox";

// Component
import RegexHelper from "../../asset/js/RegexHelper";
import LoginStore from "../../Store/LoginStore";

// Styled-components
const LoginLink = styled(Link)`
text-decoration: none;
color: rgb(129,129,129);
`;

function Login() {
  // custom-hooks(resize)
  const isMd = useResize();

  const { onLogin } = LoginStore();

  // 로그인 유지
  const [loginMaintenance, setLoginMaintenance] = useState(false);

  const [id, setId] = useState(null);
  const [pw, setPw] = useState(null);
  // document id
  // const label = useRef();
  const inputId = useRef();
  // const ref = useRef({ label, inputId });

  return (
    <div className="login-inner-container-input-box">
      <Input title="아이디" id="userId" type="text" ref={inputId} placeholder="아이디를 입력하세요" getValue={setId} size={isMd} />

      <Input title="비밀번호" id="userPw" type="password" placeholder="비밀번호를 입력하세요" getValue={setPw} pattern="[0-9]+" maxLength={50} size={isMd} />
      <CheckBox title="로그인 상태 유지" id="LoginMaintenance" checked={loginMaintenance} setChangeValue={setLoginMaintenance} />
      <button
        className="green-btn __md"
        onClick={(e) => {
          e.preventDefault();
          // 값의 type, 유무, 띄어쓰기만 있는 경우, 이메일형식인 경우 검사
          SwalAlert();
          // if (RegexHelper.checkEmail("string", id, inputId, 0, 30)) {
          //   // id를 null로 바꾸기
          //   console.log("통과");
          //   onLogin(id, pw);
          // } else {
          //   setId(null);
          // }
        }}
      >
        로그인
      </button>
      <ul>
        <li><LoginLink to="/Home/Findid">아이디 찾기</LoginLink></li>
        <li><LoginLink to="/Home/Findpw">비밀번호 찾기</LoginLink></li>
        <li><LoginLink to="/Join" style={{ color: "black" }}>회원가입</LoginLink></li>
      </ul>
    </div>
  );
}

export default Login;
