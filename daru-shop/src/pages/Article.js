import React, { useState, useEffect } from "react";
import {
  Route, Routes, useLocation, Navigate,
} from "react-router-dom";

import phoneAuthenticCationStore from "../Store/phoneAuthenticCationStore";

import "../asset/scss/article.scss";

// Pages
import Find from "./Home/Find";
import Delete from "./Home/Delete";
import NotFound from "./Home/NotFound";

// Components
import Components from "../components/Components";
import Title from "./Home/Title";
import Login from "./Home/Login";
import CheckJoin from "./Home/Join/CheckJoin";
import CheckJoin2 from "./Home/Join/CheckJoin2";
import JoinStart from "./Home/Join/JoinStart";
import JoinStart1 from "./Home/Join/JoinStart1";
import JoinStart2 from "./Home/Join/JoinStart2";
import JoinSearchMyShop from "./Home/Join/JoinSearchMyShop";
import JoinFinal from "./Home/Join/JoinFinal";
import UserInfo from "./User/UserInfo";
import UserNews from "./User/UserNews";
import UserNewsDetail from "./User/UserNewsDetail";
import UserNewsWrite from "./User/UserNewsWrite";

function Article() {
  const { setPhoneNum, setResult } = phoneAuthenticCationStore();
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

    // 회원가입, 박스 지우기(inner-container setup)
    if (location.indexOf("User") > -1) {
      setPages("user");
    } else if (location.indexOf("Home") > -1) {
      setPages("home");
    } else if (location.indexOf("Join") > -1) {
      setPages("join");
    } else {
      setPages("notfound");
    }

    // home-container에서 __join 클래스 추가하기
    if (location.indexOf("Join") > -1) {
      setIsJoin(" __join");
    } else if (location.indexOf("Detail") > -1 || location.indexOf("Write") > -1) {
      setIsJoin(" __detail");
    } else {
      setIsJoin("");
    }
  }, [location]);

  return (
    <article className="article-container">
      {console.log(isJoin, pages)}
      <div className={`${pages}-inner-container${isJoin}`}>
        {/* 타이틀 박스에 title값 props로 전해주기 */}
        {/* url에 user가 있다면 표시안함 */}
        {pages === "home" || pages === "join" ? <Title title={title} /> : undefined}
        {/* path가 다르다면 각자 다른 component 호출 */}
        <Routes>
          <Route path="/" element={<Navigate replace to="/Home" />} />
          <Route path="/Home" element={<Login />} />
          <Route path="/Home/Findid" element={<Find />} />
          <Route path="/Home/Findpw" element={<Find title={setTitle} />} />
          <Route path="/Join" element={<CheckJoin title={setTitle} />} />
          <Route path="/Join/:condition_id" element={<CheckJoin2 />} />
          <Route path="/Join/Start" element={<JoinStart />} />
          <Route path="/Join/Start1" element={<JoinStart1 />} />
          <Route path="/Join/Start2" element={<JoinStart2 />} />
          <Route path="/Join/SearchMyShop" element={<JoinSearchMyShop />} />
          <Route path="/Join/Final" element={<JoinFinal title={setTitle} />} />
          <Route path="/Home/Components" element={<Components />} />
          <Route path="/Home/Delete" element={<Delete />} />
          <Route path="/User/Info" element={<UserInfo />} />
          <Route path="/User/News" element={<UserNews />} />
          <Route path="/User/News/Detail/:id" element={<UserNewsDetail />} />
          <Route path="/User/News/Write" element={<UserNewsWrite />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </article>
  );
}

export default Article;
