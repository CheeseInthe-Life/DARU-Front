import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

// SCSS, Component
import "../../asset/scss/home.scss";
import Input from '../../components/Input';
import CheckBox from "../../components/CheckBox";

const regex_helper = require('../../asset/js/Regex');



// Styled-components
const LoginLink = styled(Link)`
text-decoration: none;
color: rgb(129,129,129);
`
const Login = () => {
    // 로그인 유지
    const [loginMaintenance, setLoginMaintenance] = useState(false);
    const [id, setId] = useState(null);
    const [pw, setPw] = useState(null);

    //document id
    const inputId = React.useRef();

    return (
        <div className="login-inner-container-input-box">
            <Input title="아이디" id="userId" type="text" ref={inputId} placeholder="아이디를 입력하세요" getValue={setId} />

            <Input title="비밀번호" id="userPw" type="password" placeholder="비밀번호를 입력하세요" pattern="[0-9]+" maxLength={50} />
            <CheckBox title="로그인 상태 유지" id="LoginMaintenance" checked={loginMaintenance} setChangeValue={setLoginMaintenance}></CheckBox>
            <button className="green-btn __md" onClick={(e) => {
                e.preventDefault();

                if (!(regex_helper.checkingStringValue(id))) {
                    // 띄어쓰기로 가득채워진 경우 빈값으로 초기화시킨다.
                    setId(null);
                    inputId.current.value = "";
                    inputId.current.focus();
                } else {
                    if (!(regex_helper.checkEmail(id))) {
                        inputId.current.value = "";
                        inputId.current.focus();
                    }
                };

            }}>로그인</button>
            <ul>
                <li><LoginLink to="/Findid">아이디 찾기</LoginLink></li>
                <li><LoginLink to="/Findpw">비밀번호 찾기</LoginLink></li>
                <li><LoginLink to="/Join" style={{ color: "black" }}>회원가입</LoginLink></li>
            </ul>
        </div >
    );
};

export default Login;