import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import "../asset/scss/header.scss";

// Link CSS
const MenuLink = styled(Link)`
text-decoration: none;
color: white;
`

// 상단 네비바 영역
const Top = () => {
    const navigate = useNavigate();

    // 탭 토글할 것인지 말것인지
    const [isToggle, setisToggle] = useState(false);
    // 클래스 추가
    const [toggleClass, setToggleClass] = useState("off");

    useEffect(() => {
        // true이면 on 클래스 추가
        if (isToggle) {
            setToggleClass("on");
            // 아님 off 클래스 추가
        } else {
            setToggleClass("off");
        }
    }, [isToggle])

    return (
        <header>
            <nav className="nav-top">
                <ul className="nav-top-left">
                    <li onClick={(e) => {
                        e.preventDefault();
                        setisToggle(!isToggle);
                    }}><MenuLink to="/"></MenuLink></li>
                    <li className="nav-top-left-title"><MenuLink to="/">다루</MenuLink></li>
                </ul>
                <ul className={"nav-top-mobile-button __" + toggleClass}>
                    <li className={"nav-top-mobile-lists __" + toggleClass}>{isToggle && <span>매장 소식 관리</span>}</li>
                    <li className={"nav-top-mobile-lists __" + toggleClass}>
                        {isToggle && <span>정보 수정</span>}
                    </li>
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
                    {/* 끝에서부터 시작한다 */}
                    <li onClick={() => { return navigate('/Join'); }}></li>
                    <li onClick={() => { return navigate('/Findid'); }}></li>
                </ul>
            </nav >
        </header>

    );
};

export default Top;