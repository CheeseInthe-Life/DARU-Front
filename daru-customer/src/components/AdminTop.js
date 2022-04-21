import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import "../asset/AdminTop.scss";
import "../asset/Colors.scss";

const MenuLink = styled(NavLink)`
  display: inline-block;
  text-align: center;
  width: 20%;
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  color: black;

  padding-top: 50px;
  padding-bottom: 10px;

  &:hover {
    color: rgb(104, 173, 155);
  }

  &.active {
    text-decoration: none;
    color: black;
    border-bottom: 5px solid rgb(180, 146, 110);
  }
`;
const AdminTop = () => {
  return (
    <div className="adminTop-container">
      <nav>
        <MenuLink to="/Admin">매장 현황</MenuLink>
        <MenuLink to="/Admin_Reservation">예약 현황</MenuLink>
        <MenuLink to="/Admin_Promotion">매장 홍보하기</MenuLink>
        <MenuLink to="/Admin_Event">매장 소식 관리</MenuLink>
        <MenuLink to="/Admin_Information">정보 수정</MenuLink>
      </nav>
    </div>
  );
};

export default AdminTop;
