// FrameWorks
import React from "react";

// Pages
import Home from "./pages/Home"


// Components
import Top from "./components/Top";
import Footer from "./components/Footer";

// CSS
import "./asset/scss/common.scss";
import "./asset/css/reset.css";



function App() {
  return (
    <div className="app-container">
      {/* nav */}
      <Top />
      {/* ------- 페이지로 사용될 컴포넌트들 명시하기 ------- */}
      <Home />
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
