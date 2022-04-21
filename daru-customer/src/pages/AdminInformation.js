import React from "react";

import AdminTitle from "../components/AdminTitle";

import "../asset/Common.scss";

const AdminInformation = () => {
  return (
    <div className="common-container">
      <div className="common-container common-inner-container">
        <AdminTitle title="매장 기본 정보"></AdminTitle>
        <AdminTitle title="매장 연락처 및 SNS 링크"></AdminTitle>
        <AdminTitle title="매장 카테고리 설정"></AdminTitle>
        <AdminTitle title="운영시간"></AdminTitle>
        <AdminTitle title="매장 상단 배너 이미지(최대 9개)"></AdminTitle>
        <AdminTitle title="메뉴판 이미지(최대 3개)"></AdminTitle>
        <AdminTitle title="매장 인증 여부"></AdminTitle>
      </div>
    </div>
  );
};

export default AdminInformation;