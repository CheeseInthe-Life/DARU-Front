import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import "../asset/scss/top.scss";

// Link CSS
const MenuLink = styled(Link)`
text-decoration: none;
color: white;
`

// 상단 네비바 영역
const Top = () => {
    const navigate = useNavigate();

    // const [toggleMenu, setToggleMenu] = useState("off");

    // useEffect(() => {
    //     console.log(toggleMenu);
    // }, [toggleMenu])

    return (
        <nav className="nav-top">
            <ul className="nav-top-left">
                <li><MenuLink to="/"></MenuLink></li>
                <li className="nav-top-left-title"><MenuLink to="/">다루</MenuLink></li>
            </ul>
            {/* <ul className={"nav-top-mobile-list __" + toggleMenu}>
                <button className={"nav-top-mobile-button __" + toggleMenu} onClick={() => { setToggleMenu("off"); }}>kiiiiii</button>
                <li className={"nav-top-mobile-list __" + toggleMenu}><MenuLink to="/">매장 소식 관리</MenuLink></li>
                <li className={"nav-top-mobile-list __" + toggleMenu}><MenuLink to="/">정보 수정</MenuLink></li>
            </ul> */}


            <ul className="nav-top-center">
                {/* <li><MenuLink to="/">매장 현황</MenuLink></li>
                <li><MenuLink to="/">예약 현황</MenuLink></li>
                <li><MenuLink to="/">매장 홍보하기</MenuLink></li> */}
                <li><MenuLink to="/">매장 소식 관리</MenuLink></li>
                <li><MenuLink to="/">정보 수정</MenuLink></li>
                <li className="nav-top-left-title"><MenuLink to="/">다루</MenuLink></li>
            </ul>

            <ul className="nav-top-right">
                {/* 끝에서부터 시작한다 */}
                <li onClick={() => { return navigate('/Join'); }}></li>
                <li onClick={() => { return navigate('/Findid'); }}></li>
            </ul>
        </nav >
    );
};

export default Top;