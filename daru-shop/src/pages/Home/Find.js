import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

import "../../asset/scss/pages/find.scss";

import SendAuthenticationNumber from "./Find/ID/SendAuthenticationNumber";
import CheckAuthenticationNumber from "./Find/ID/CheckAuthenticationNumber";
import FinalFindId from "./Find/ID/FinalFindId";
import SendAuthenticationEmail from "./Find/PW/SendAuthenticationEmail";
import CheckAuthenticationEmail from "./Find/PW/CheckAuthenticaitonEmail";
import ResetPassword from "./Find/PW/ResetPassword";
import FinalFindPassword from "./Find/PW/FinalFindPassword";

// 메인으로 돌아가기 Link CSS

function Find({ title }) {
  // 사용할 state 값들
  const location = useLocation().pathname;
  const [page, setPage] = useState(location);

  // page별 렌더링 함수
  function FindRendering(page) {
    switch (page) {
      case "/Home/Findid":
        return (
          <SendAuthenticationNumber page={setPage} />
        );
        break;
      case "/Home/Findid/Check":
        return (
          <CheckAuthenticationNumber page={setPage} />
        );
        break;
      case "/Home/Findid/Final":
        console.log(page);
        return (
          <FinalFindId />
        );
        break;
      case "/Home/Findpw":
        return (
          <SendAuthenticationEmail page={setPage} />
        );
        break;
      case "/Home/Findpw/Check":
        return (
          <CheckAuthenticationEmail page={setPage} />
        );
        break;
      case "/Home/Findpw/Resetpw":
        return (
          <ResetPassword title={title} page={setPage} />
        );
        break;
      case "/Home/Findpw/Final":
        return (
          <FinalFindPassword />
        );
      default:
        break;
    }
  }
  return (
    <div className="find-input-container">
      {FindRendering(page)}
    </div>
  );
}

Find.propTypes = {
  title: PropTypes.func
};

export default Find;
