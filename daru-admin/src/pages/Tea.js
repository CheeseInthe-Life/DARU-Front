import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Table,Pagination } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import { teaList } from "../slices/teaSlice";
import "../assets/scss/common.scss";

const StyledLink = styled(Link)`
  text-decoration: none;
`;


const Tea = () => {
  // tea구독
  const { rt, rtmsg, item, loading } = useSelector((state) => {
    return state.tea;
  });
  // 현재 페이지 번호
  const [page, setPage] = useState(1);
  // ajax로 받은 페이지네이션 데이터
  const [pageData, setPageData] = useState();
  const [nextPageData, setNextPageData] = useState();
  const [deleteData, setdeleteData] = useState([]);
  // const checkBox = useRef(null);
  // const [checked, setChecked] = useState();
  const dispatch = useDispatch();

  // 페이지 로드하자마자 page state 감지
  useEffect(() => {
    dispatch(teaList({ method: "get", page: page }));
  }, [page]);
  // 통신 성공하면 pagenation state에 값 넣어주기
  useEffect(() => {
    if(item){
      setPageData(item.pagenation)  
    }
  },[item])

  // useEffect(() => {
  //   if(checked){
  //     console.log(checked);  
  //   }
  // },[checked])

  // useEffect(() => {
  //   console.log("check");
  // }, [checkBox.current.checked])



  // 테이블 출력 데이터
  function tableData(data) {
    let datas = data.item;
    return (
      <tbody>
        {datas.map((v, i) => (
          <tr key={i}>
            {/* <td><input type="checkbox" value={v.teahouse_id} ref={checkBox}></input></td> */}
            <td>{v.teahouse_id}</td>
            <td>
              {/* Link확장 */}
              <StyledLink to={`/Tea/Details/${v.teahouse_id}`}>
                {v.place_name}
              </StyledLink>
            </td>
            <td>{v.address}</td>
            <td>{v.phone}</td>
            <td>{v.homepage}</td>
            <td>{v.instagram}</td>
          </tr>
        ))}
      </tbody>
    );
  }
// pagenation 버튼(props가 있다면)
  function pageButton(props){
    // props가 없다면
    if(!props){
      return
    }
    return(
      <Pagination style={{justifyContent: 'center'}}>
        <Pagination.Prev onClick={() => setPage(page - 1)} disabled={props.nextGroupFirstPage === 0}/>
        {/* props가 있다면 page버튼 렌더링 */}
        {(props) ? pageBtn(props) : console.log("props가 없습니다")}
        <Pagination.Next onClick={() => setPage(page  + 1)} disabled={props.prevGroupLastPage === 0}/>
      </Pagination>
    )
  }
  // page버튼 조건문 렌더링
  function pageBtn(props){
    // 리턴할 버튼 배열
    const buttons= [];
    for(let i=props.groupStart; i<=props.groupEnd; i++){
      buttons.push(<Pagination.Item key={i} onClick={(e) => { 
        e.preventDefault();
        setPage(i)}} active={i === page}>{i}</Pagination.Item>);
    }
    return buttons;
  }

  return (
    //   찻집명, 찻집설명, 전화번호, 홈페이지 주소, 인스타그램 주소,
    <div>
      <Table striped bordered hover size="lg">
        <thead>
          <tr>
            <th>선택</th>
            <th>찻집명</th>
            <th>찻집 주소</th>
            <th>전화번호</th>
            <th>홈페이지</th>
            <th>인스타그램</th>
          </tr>
        </thead>
        {/* 리덕스에 값이 있다면 table에 값이 나타납니다.*/}
        {rt === 200 ? tableData(item) : console.log("data가 없습니다.")}
      </Table>
      {/* 리덕스에 값이 있다면 table에 값이 나타납니다.*/}
      {rt === 200 ? pageButton(pageData) : console.log("data가 없습니다.(page)")}
    </div>
  );
};



export default Tea;
