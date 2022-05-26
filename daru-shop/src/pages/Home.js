import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";

import useStore from '../Slice/FindIdStore';

import "../asset/scss/home.scss";

// Pages
import Find from "./Home/Find"
import Join from "./Home/Join"
import NotFound from "./Home/NotFound"

// Components
import Components from "../components/Components";
import Title from './Home/Title';
import Login from './Home/Login';




const Home = () => {
    const { setPhoneNum, setResult } = useStore();

    // 타이틀 지정
    const [title, setTitle] = useState("");
    // 회원가입페이지일경우
    const [isJoin, setIsJoin] = useState("");
    // 현재 페이지 경로 추출
    const location = useLocation().pathname;
    // path가 /라면 가맹점 관리페이지 출력
    useEffect(() => {
        if (location === "/") {
            setTitle("가맹점 관리 페이지");
            // store phone, result값 초기화
            setPhoneNum("");
            setResult({});
        } else if (location === "/Findid") {
            setTitle("아이디 찾기");
        } else if (location === "/Findpw") {
            setTitle("비밀번호 찾기");
        } else if (location === "/Join") {
            setTitle("회원 가입");
        }
        // 회원가입 박스 지우기
        (location === "/Join") ? setIsJoin(" __join") : setIsJoin("");
    }, [location]);

    return (
        <article className="home-container">
            <div className={"home-inner-container" + isJoin}>
                {/* 타이틀 박스에 title값 props로 전해주기 */}
                <Title title={title}></Title>
                {/* path가 다르다면 각자 다른 component 호출 */}
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/Findid" element={<Find />} />
                    <Route path="/Findpw" element={<Find title={setTitle} />} />
                    <Route path="/Join" element={<Join />} />
                    <Route path="/Components" element={<Components />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </article>
    );
};

export default Home;