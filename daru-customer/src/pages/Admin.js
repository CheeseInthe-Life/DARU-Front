import React from "react";

import AdminTitle from "../components/AdminTitle";

import "../asset/Common.scss";

const AdminEvent = () => {
  return (
    <div className="common-container">
      <div className="common-container common-inner-container">
        <AdminTitle title="매장 운영 지표"></AdminTitle>
        <AdminTitle title="고객 분포"></AdminTitle>
        <AdminTitle title="후기 관리"></AdminTitle>
      </div>
    </div>
  );
};

export default AdminEvent;