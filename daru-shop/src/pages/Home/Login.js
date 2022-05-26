import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

// SCSS, Component
import "../../asset/scss/home.scss";
import Input from '../../components/Input';
import CheckBox from "../../components/CheckBox";

const regexHelper = require('../../asset/js/Regex');



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
    const label = useRef();
    const inputId = useRef();
    const ref = useRef({ label, inputId });


    return (
        <div className="login-inner-container-input-box">
            <Input title="아이디" id="userId" type="text" ref={ref} placeholder="아이디를 입력하세요" getValue={setId} />

            <Input title="비밀번호" id="userPw" type="password" placeholder="비밀번호를 입력하세요" pattern="[0-9]+" maxLength={50} />
            <CheckBox title="로그인 상태 유지" id="LoginMaintenance" checked={loginMaintenance} setChangeValue={setLoginMaintenance}></CheckBox>
            <button className="green-btn __md" onClick={(e) => {
                e.preventDefault();
                // 값의 type, 유무, 띄어쓰기만 있는 경우 검사
                if (regexHelper.checkingType('string', id, inputId, 30)) {
                    regexHelper.checkEmail(id, inputId);
                    // id를 null로 바꾸기
                } else {
                    setId(null);
                }

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