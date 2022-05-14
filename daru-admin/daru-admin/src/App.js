// FrameWorks
import React from "react";
import { Route, Routes } from "react-router-dom";

// Pages
import Top from "./components/Top";
import Tea from "./pages/Tea";
import Tea2 from "./pages/Tea2";
import Mbteai from "./pages/MBTeai";
import TeaDetails from "./pages/TeaDetails";

// CSS
import "./assets/css/reset.css";
import "./assets/scss/common.scss";

function App() {
  return (
    <div className="app-container">
      <div className="app-container inner-container">
        {/* nav */}
        <Top />

        {/* ------- 페이지로 사용될 컴포넌트들 명시하기 ------- */}
        <Routes>
          <Route path="/" element={<Tea></Tea>} />
          <Route path="/Tea/Details/" element={<TeaDetails></TeaDetails>} />
          <Route
            path="/Tea/Details/:userId"
            element={<TeaDetails></TeaDetails>}
          />
          <Route path="/Tea2" element={<Tea2></Tea2>} />
          <Route path="/MbteaI" element={<Mbteai></Mbteai>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
