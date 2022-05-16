import React, {useState}from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

import "../../asset/scss/home.scss";
import InputMd from '../../components/Home/InputMd';
import CheckBox from "../../components/Home/CheckBox"

const LoginLink = styled(Link)`
text-decoration: none;
color: rgb(129,129,129);
`
const LoginBox = () => {
    // 로그인 유지
    const [loginMaintenance, setLoginMaintenance] = useState(false);

    React.useEffect(() => {
        console.log(loginMaintenance);
    }, [loginMaintenance]);

    return (
        <div className="login-inner-container-input-box">
            <InputMd title="아이디" id="userId" type="text" placeholder="아이디를 입력하세요" />

            <InputMd title="비밀번호" id="userPw" type="password" placeholder="비밀번호를 입력하세요" pattern="[0-9]+" maxLength={50}/>
            <CheckBox title="로그인 상태 유지" id="LoginMaintenance" checked={loginMaintenance}setChangeValue={setLoginMaintenance}></CheckBox>    
            <button className="lg-green-btn" >로그인</button>
            <ul>
                <li><LoginLink to="/Findid">아이디 찾기</LoginLink></li>
                <li><LoginLink to="/Findpw">비밀번호 찾기</LoginLink></li>
                <li><LoginLink to="/Join" style={{ color: "black" }}>회원가입</LoginLink></li>
            </ul>
        </div>
    );
};

export default LoginBox;