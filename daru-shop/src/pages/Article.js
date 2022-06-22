import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation, Navigate } from "react-router-dom";

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



const Article = () => {
    const { setPhoneNum, setResult } = FindIdStore();
    // 타이틀 지정
    const [title, setTitle] = useState("");
    // 회원가입페이지일경우
    const [isJoin, setIsJoin] = useState("");
    // 유저페이지일 경우
    const [pages, setPages] = useState("");
    // 현재 페이지 경로 추출
    const location = useLocation().pathname;
    // path가 /라면 가맹점 관리페이지 출력
    useEffect(() => {
        console.log(location);
        if (location === "/Home") {
            setTitle("가맹점 관리 페이지");
            setPhoneNum("");
            setResult({});
        } else if (location === "/Home/Findid") {
            setTitle("아이디 찾기");
        } else if (location === "/Home/Findpw") {
            setTitle("비밀번호 찾기");
        } else if (location === "/Home/Join") {
            setTitle("회원 가입");
        } else if (location.indexOf("Join/Start") > -1) {
            setTitle("매장 등록");
        } else if (location === "/Home/Delete") {
            setTitle("매장 삭제");
        }

        // home-container에서 __join 클래스 추가하기
        (location.indexOf("Join") > -1) ? setIsJoin(" __join") : setIsJoin("");

        // 회원가입, 박스 지우기(inner-container setup)
        if (location.indexOf("User") > -1) {
            setPages("user");
        } else if (location.indexOf("Home") > -1) {
            setPages("home");
        } else {
            setPages("notfound");
        }
    }, [location]);

    return (
        <article className={`article-container`}>
            <div className={`${pages}-inner-container` + isJoin}>
                {/* 타이틀 박스에 title값 props로 전해주기 */}
                {/* url에 user가 있다면 표시안함 */}
                {pages == "home" ? <Title title={title} /> : undefined}
                {/* path가 다르다면 각자 다른 component 호출 */}
                <Routes>
                    <Route path="/" element={<Navigate replace to="/Home" />} />
                    <Route path="/Home" element={<Login />} />
                    <Route path="/Home/Findid" element={<Find />} />
                    <Route path="/Home/Findpw" element={<Find title={setTitle} />} />
                    <Route path="/Home/Join" element={<CheckJoin />} />
                    <Route path="/Home/Join/:condition_id" element={<CheckJoin2 />} />
                    <Route path="/Home/Join/Start" element={<Join />} />
                    <Route path="/Home/Components" element={<Components />} />
                    <Route path="/Home/Delete" element={<Delete />} />
                    <Route path="/User/Info" element={<UserInfo />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </article>
    );
};

export default Article;