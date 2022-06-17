import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";

import FindIdStore from '../Store/FindIdStore';

import "../asset/scss/article.scss";

// Pages
import Find from "./Home/Find"
import Join from "./Home/Join"
import Delete from "./Home/Delete";
import NotFound from "./Home/NotFound";

// Components
import Components from "../components/Components";
import Title from './Home/Title';
import Login from './Home/Login';
import CheckJoin from "./Home/Join/CheckJoin";
import CheckJoin2 from "./Home/Join/CheckJoin2";
import UserInfo from "./User/UserInfo";



const Home = () => {
    const { setPhoneNum, setResult } = FindIdStore();

    // 타이틀 지정
    const [title, setTitle] = useState("");
    // 회원가입페이지일경우
    const [isJoin, setIsJoin] = useState("");
    // 유저페이지일 경우
    const [isUser, setIsUser] = useState("");
    // 현재 페이지 경로 추출
    const location = useLocation().pathname;
    // path가 /라면 가맹점 관리페이지 출력
    useEffect(() => {
        console.log(location);
        if (location === "/") {
            setTitle("가맹점 관리 페이지");
            setPhoneNum("");
            setResult({});
        } else if (location === "/Findid") {
            setTitle("아이디 찾기");
        } else if (location === "/Findpw") {
            setTitle("비밀번호 찾기");
        } else if (location === "/Join") {
            setTitle("회원 가입");
        } else if (location.indexOf("Join/Start") > -1) {
            setTitle("매장 등록");
        } else if (location === "/Delete") {
            setTitle("매장 삭제");
        }

        // 회원가입, 박스 지우기
        console.log(location);
        (location.indexOf("Join") > -1) ? setIsJoin(" __join") : setIsJoin("");
        // user, home 다른 css 추가
        (location.indexOf("User") > -1) ? setIsUser("user") : setIsUser("home");
    }, [location]);

    return (
        <article className={`article-container`}>
            <div className={`${isUser}-inner-container` + isJoin}>
                {/* 타이틀 박스에 title값 props로 전해주기 */}
                {/* url에 user가 있다면 표시안함 */}
                {isUser == "home" ? <Title title={title} /> : undefined}
                {/* path가 다르다면 각자 다른 component 호출 */}
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/Findid" element={<Find />} />
                    <Route path="/Findpw" element={<Find title={setTitle} />} />
                    <Route path="/Join" element={<CheckJoin />} />
                    <Route path="/Join/:condition_id" element={<CheckJoin2 />} />
                    <Route path="/Join/Start" element={<Join />} />
                    <Route path="/Components" element={<Components />} />
                    <Route path="/Delete" element={<Delete />} />
                    <Route path="/User/Info" element={<UserInfo />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </article>
    );
};

export default Home;