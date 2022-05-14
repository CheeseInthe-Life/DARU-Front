import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

import "../asset/scss/top.scss";

// Link CSS
const MenuLink = styled(Link)`
text-decoration: none;
color: white;
`

// 상단 네비바 영역
const Top = () => {
    return (
        <nav className="nav-top">
            <ul className="nav-top-left">
                <li><MenuLink to="/Buttons">햄버거</MenuLink></li>
                <li className="nav-top-left-title"><MenuLink to="/">다루</MenuLink></li>
            </ul>

            <ul className="nav-top-center">
                {/* <li><MenuLink to="/">매장 현황</MenuLink></li>
                <li><MenuLink to="/">예약 현황</MenuLink></li>
                <li><MenuLink to="/">매장 홍보하기</MenuLink></li> */}
                <li><MenuLink to="/">매장 소식 관리</MenuLink></li>
                <li><MenuLink to="/">정보 수정</MenuLink></li>
                <li className="nav-top-left-title"><MenuLink to="/">다루</MenuLink></li>
            </ul>

            <ul className="nav-top-right">
                <li></li>
                <li></li>
            </ul>
        </nav>
    );
};

export default Top;