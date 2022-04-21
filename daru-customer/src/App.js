// FrameWorks
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

// pages
import Meta from "./components/Meta";
import Login from "./pages/Login";
import Join from "./pages/Join";
import Authent from "./pages/AuthenticationVerification";
import AuthenticJoin from "./pages/AuthenticJoin";
import FindId from "./pages/FindId";
import FindPw from "./pages/FindPw";
import Business from "./pages/Business";
import Confirm from "./pages/Confirm";

// pages-admin
import Top from "./components/AdminTop";
import Admin from "./pages/Admin";
import Reservation from "./pages/AdminReservation";
import Event from "./pages/AdminEvent";
import Information from "./pages/AdminInformation";
import Promotion from "./pages/AdminPromotion";

// CSS
import "./asset/reset.css";

// pageRouting
function App() {
  // 페이지 URL을 가져옵니다.
  const address = useLocation().pathname;

  return (
    <div className="container">
      {/* SEO 최적화 */}
      <Meta></Meta>
      {/* 관리자 상단바 */}
      {address.indexOf("Admin") > -1 ? <Top /> : console.log("관리자 아님")}

      {/* ------- 페이지로 사용될 컴포넌트들 명시하기 ------- */}
      <Routes>
        <Route path="/" element={<Login></Login>} exact={true} />
        <Route path="/Find_ID" element={<FindId></FindId>} />
        <Route path="/Find_PW" element={<FindPw></FindPw>} />
        <Route path="/Join" element={<Join></Join>} />
        <Route path="/Authent" element={<Authent></Authent>} />
        <Route
          path="/AuthenticJoin"
          element={<AuthenticJoin></AuthenticJoin>}
        />
        <Route path="/Business" element={<Business></Business>} />
        <Route path="/Confirm" element={<Confirm></Confirm>} />

        {/* admin */}
        <Route path="/Admin" element={<Admin></Admin>} />
        <Route
          path="/Admin_Reservation"
          element={<Reservation></Reservation>}
        />
        <Route path="/Admin_Promotion" element={<Promotion></Promotion>} />
        <Route path="/Admin_Event" element={<Event></Event>} />
        <Route
          path="/Admin_Information"
          element={<Information></Information>}
        />
      </Routes>
    </div>
  );
}

export default App;
