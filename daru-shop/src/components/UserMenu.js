import React from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import "../asset/scss/user.scss";

import plusImage from '../asset/imgs/tab_add.svg';
import minusImage from '../asset/imgs/tab_delete.svg';

const UserMenuTitles = styled.li`
color:#338F6C;
padding-left: 5px;
font-size:16px;
font-weight: 500;

`

const UserMenuInfo = styled.li`
text-align:center;
color: black;
font-size: 15px;
font-weight: 400;
cursor: pointer;
`
const UserMenuAddDelete = styled.li`
text-align: center;
color: ${props => props.color};
font-size: 12px;
cursor: pointer;
`

const UserMenu = (props) => {
    const navigate = useNavigate();
    return (
        <ul className="user-container" onClick={(e) => {
            e.preventDefault();
            return props.toggle(!props.value);
        }}>
            <UserMenuTitles>계정</UserMenuTitles>
            <UserMenuInfo>계정 정보 수정</UserMenuInfo>
            <UserMenuInfo>이용 약관</UserMenuInfo>
            <UserMenuTitles>현재 매장</UserMenuTitles>
            <UserMenuInfo>다루 티하우스</UserMenuInfo>
            <UserMenuTitles>다른 매장 관리</UserMenuTitles>
            <UserMenuInfo>00 하우스로 전환</UserMenuInfo>
            <UserMenuInfo>00 찻집으로 전환</UserMenuInfo>
            <UserMenuAddDelete color="#338F6C" onClick={(e) => { return navigate("/Home/Join/Start") }}>
                <img src={plusImage} alt="매장 추가" style={{ verticalAlign: "middle", margin: "0px 5px 3px 0px" }} />
                새로운 매장 추가
            </UserMenuAddDelete>
            <UserMenuAddDelete color="#BB9068" onClick={(e) => { return navigate("/Home/Delete") }}>
                <img src={minusImage} alt="매장 추가" style={{ verticalAlign: "middle", margin: "0px 5px 3px 0px" }} />
                현재 매장 삭제
            </UserMenuAddDelete>
        </ul>
    );
};

export default UserMenu;