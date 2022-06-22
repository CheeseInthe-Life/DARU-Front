import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

import "../asset/scss/header.scss";
import UserMenu from "./UserMenu";

// Link CSS


const HomeLink = styled(NavLink)`
text-decoration: none;
color: white;
height: auto;
`

const MenuLink = styled(HomeLink)`
&.active{
    color: #FFE4CC;
    border-bottom: 3px solid #FFE4CC;
    height: 30px;
    margin-top: 18px;
    display: block;
}
`

// 상단 네비바 영역
const Top = () => {
    const navigate = useNavigate();

    // 탭 토글할 것인지 말것인지
    const [isToggle, setIsToggle] = useState(false);
    const [isUserMenuToggle, setIsUserMenuToggle] = useState(false)
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
    }, [isToggle]);

    return (
        <header>
            <nav className="nav-top">
                <ul className="nav-top-left">
                    <li onClick={(e) => {
                        e.preventDefault();
                        setIsToggle(!isToggle);
                    }}><MenuLink to="/"></MenuLink></li>
                    <li className="nav-top-left-title"><HomeLink to="/">다루</HomeLink></li>
                </ul>
                <ul className={"nav-top-mobile-button __" + toggleClass}>
                    <li className={"nav-top-mobile-lists __" + toggleClass}>{isToggle && <span onClick={(e) => {
                        e.preventDefault();
                        navigate("/User");
                        setIsToggle(!isToggle);
                    }}>매장 소식 관리</span>}</li>
                    <li className={"nav-top-mobile-lists __" + toggleClass} >
                        {isToggle && <span onClick={(e) => {
                            e.preventDefault();
                            navigate("/User/Info");
                            setIsToggle(!isToggle);
                        }}>정보 수정</span>}
                    </li>
                </ul>


                <ul className="nav-top-center">
                    {/* <li><MenuLink to="/">매장 현황</MenuLink></li>
                <li><MenuLink to="/">예약 현황</MenuLink></li>
                <li><MenuLink to="/">매장 홍보하기</MenuLink></li> */}
                    <li><MenuLink to="/User/"> 매장 소식 관리</MenuLink></li>
                    <li><MenuLink to="/User/Info">정보 수정</MenuLink></li>
                    <li className="nav-top-left-title"><HomeLink to="/">다루</HomeLink></li>
                </ul>

                <ul className="nav-top-right">
                    {/* 끝에서부터 시작한다 */}
                    <li onClick={(e) => {
                        e.preventDefault();
                        setIsUserMenuToggle(!isUserMenuToggle);
                    }}></li>
                    <li onClick={() => { return navigate('/Home/Findid'); }}></li>

                </ul>
                {isUserMenuToggle && <UserMenu toggle={setIsUserMenuToggle} value={isUserMenuToggle}></UserMenu>}
            </nav >
        </header >

    );
};

export default Top;