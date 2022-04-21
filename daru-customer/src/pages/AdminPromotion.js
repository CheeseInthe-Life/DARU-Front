import React from "react";

import AdminTitle from "../components/AdminTitle";

import "../asset/Common.scss";

const AdminPromotion = () => {
  return (
    <div className="common-container">
      <div className="common-container common-inner-container">
        <AdminTitle title="매장 소식 지표"></AdminTitle>
        <AdminTitle title="매장 소식 관리"></AdminTitle>
      </div>
    </div>
  );
};

export default AdminPromotion;