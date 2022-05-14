import React, {useState, useEffect} from "react";

import { useLocation  } from "react-router-dom";
// Bootstrap
import { Navbar, Nav, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { teaList } from "../slices/teaSlice";

// CSS
import "../assets/scss/Top.scss";

const Top = () => {
  // Details란 path가 있을 경우
  const location = useLocation().pathname.indexOf("Details");
  
  
  


  // nav 안 추가, 삭제 버튼
function NavButtons(props) {
  const location = useLocation().pathname;
  const dispatch = useDispatch();
  const [search, setSearch] = useState();
  

  // 이동하기
  function moveToLocation(params) {
    const urls = params;
    if (urls === "/") {
      window.location.replace("/Tea/Details");
    }
  }

  return (
    <div>
      <Form.Control style={{ width: "100px", marginRight:"10px", display:"inline-block"}} type="text" placeholder="검색" maxLength={10} onChange={(e) => {
        e.preventDefault();
        
        console.log(e.currentTarget.value);
        setSearch(e.currentTarget.value);
        }}/>

      <Button
        size="sm"
        style={{ marginRight: "10px" }}
        variant="info"
        onClick={(e) => {
          e.preventDefault();
          dispatch(teaList({
            method: "getSearch", value: search
          }))
        }}>
        검색
      </Button>

       <Button
        size="sm"
        style={{ marginRight: "10px" }}
        onClick={(e) => {
          e.preventDefault();
          moveToLocation(location);
        }}
      >
        추가
      </Button>
      <Button variant="danger" size="sm" style={{ marginRight: "10px" }} onClick={(e) => {
        e.preventDefault();
        
      }}>
        삭제
      </Button>
    </div>
  );
}

  return (
    <div className="top-container">
      <div className="top-container top-title">
        <h3>다루 관리시스템</h3>
        <Button
          variant="danger"
          size="sm"
          style={{
            display: "inline-block",
            float: "right",
            marginRight: "10px",
          }}
        >
          로그아웃
        </Button>
      </div>
      <Navbar bg="dark" expand="lg" style={{ width: "100%" }}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" style={{ color: "white" }}>
              찻집
            </Nav.Link>
            <Nav.Link href="/Tea2" style={{ color: "white" }}>
              차(카테고리)
            </Nav.Link>
            <Nav.Link href="/Mbteai" style={{ color: "white" }}>
              MbteaI
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
        {/* 만약 Details가 없다면*/}

        {location === -1 ? <NavButtons/> : console.log(1)}
      </Navbar>
    </div>
  );
};



export default Top;
