// FrameWorks
import React from "react";

// Pages
import Home from "./pages/Home"


// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// CSS
import "./asset/scss/common.scss";
import "./asset/css/reset.css";



function App() {
  return (
    <React.Fragment>
      {/* nav */}
      <Header />
      {/* ------- 페이지로 사용될 컴포넌트들 명시하기 ------- */}
      <Home />
      {/* footer */}
      <Footer />
    </React.Fragment>
  );
}

export default App;
