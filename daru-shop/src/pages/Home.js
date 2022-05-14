import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";

import "../asset/scss/home.scss";

// Pages
import Find from "../components/Home/Find"
import Join from "./Home/Join"

// Components
import Components from "../components/Components";
import Title from '../components/Home/Title';
import Login from '../components/Home/Login';


const LoginLink = styled(Link)`
text-decoration: none;
color: rgb(129,129,129);
`

const Home = () => {
    // 타이틀 지정
    const [title, setTitle] = useState("");
    // 현재 페이지 경로 추출
    const location = useLocation().pathname;
    // path가 /라면 가맹점 관리페이지 출력
    useEffect(() => {
        if (location === "/") {
            setTitle("가맹점 관리 페이지");
        } else if (location === "/Findid") {
            setTitle("아이디 찾기");
        } else if (location === "/Findpw") {
            setTitle("비밀번호 찾기");
        }
    }, [location]);

    return (
        <div className="home-container">
            <div className="home-inner-container">
                {/* 타이틀 박스에 title값 props로 전해주기 */}
                <Title title={title}></Title>
                {/* path가 /라면 login component 호출 */}
                {location === "/" && <Login />}
                {/* path가 다르다면 각자 다른 component 호출 */}
                <Routes>
                    <Route path="/Findid" element={<Find />} />
                    <Route path="/Findpw" element={<Find title={setTitle}/>} />
                    <Route path="/Join" element={<Join title={setTitle} />} />
                    <Route path="/Components" element={<Components />} />
                </Routes>
            </div>
        </div>
    );
};

export default Home;