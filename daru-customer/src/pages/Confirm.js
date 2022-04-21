import React from "react";

import "../asset/Confirm.scss";

import Buttons from "../components/Buttons";

const Confirm = () => {
  return (
    <div className="confirm-container">
      <h1>
        가게 승인 신청서 제출이 완료되었습니다. <br />
        제출 후 승인까지 최대 1일~2일이 소요됩니다.
      </h1>

      <Buttons
        sentence="가게 정보 입력하러 가기"
        urls="AuthenticJoin"
      ></Buttons>
    </div>
  );
};

export default Confirm;
