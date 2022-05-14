import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

import "../../asset/scss/home.scss";

const LoginLink = styled(Link)`
text-decoration: none;
color: rgb(129,129,129);
`
const loginBox = () => {
    return (
        <div className="login-inner-container-input-box">
            <div className="lg-input-text-box">
                <label htmlFor="labelId" className="lg-input-text-label">아이디</label>
                <input type="text" name="" id="labelId" className="md-input-text" placeholder="아이디를 입력하세요" />
                {/* <span className="login-indicater">아이디를 입력하세욧</span> */}
            </div>

            <div className="lg-input-text-box">
                <label htmlFor="labelPw" className="lg-input-text-label">비밀번호</label>
                <input type="password" name="" id="labelPw" className="md-input-text" placeholder="비밀번호를 입력하세요" />
            </div>
            <div className="lg-box-checkbox">
                <input type="checkbox" name="" id="scales" className="lg-checkbox" />
                <label htmlFor="scales" className="lg-label">로그인 상태 유지</label>
            </div>
            <button className="lg-green-btn" >로그인</button>
            <ul>
                <li><LoginLink to="/Findid">아이디 찾기</LoginLink></li>
                <li><LoginLink to="/Findpw">비밀번호 찾기</LoginLink></li>
                <li><LoginLink to="/Join" style={{ color: "black" }}>회원가입</LoginLink></li>
            </ul>
        </div>
    );
};

export default loginBox;