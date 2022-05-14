import React, { useState, useEffect } from "react";

import { Button, Form, Carousel } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { teaList } from "../slices/teaSlice";

import "../assets/scss/TeaDetail.scss";

const TeaDetails = () => {
  // hooks ---
  // 파일에 변동사항이 확인되면 캐러셀에 출력될 파일들(매장 사진)

  // store
  const { rt, rtmsg, item, loading } = useSelector((state) => {
    return state.tea;
  });
  // dispatch 함수
  const dispatch = useDispatch();

  // 변수 ---
  // states
  const [componyName, setComponyName] = useState("");
  const [description, setDescription] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [managerPhone, setManagerPhone] = useState("");
  const [homePage, setHomePage] = useState("");
  const [insta, setInsta] = useState("");
  const [address, setAddress] = useState("");
  const [submitFiles, setSubmitFiles] = useState();

  const [imgs, setImgs] = useState();
  const [methods, setMethods] = useState("post");

  // 넘겨받은 url파라미터
  const params = useParams().userId;

  // 첫 실행할때 실행
  useEffect(() => {
    // 파라미터에 url 파라미터가 있는 경우에만
    if (params) {
      const data = findData(item.item);
      updateData(data);
      // 수정 메소드로 바꾸기
      setMethods("put");
    }
  }, []);

  // url 파라미터가 없다면

  // 서버로 보내줄 데이터
  const SubmitData = {
    place_name: componyName,
    description: description,
    homepage: homePage,
    phone: phoneNumber,
    manager_phone: managerPhone,
    instagram: insta,
    address: address,
    // submitFiles: submitFiles,
  };

  // 함수 ---
  // 앞뒤공백 및 가운데 공백 제거

  function spaceRemove(value) {
    const SpaceRegex = / /gi;
    return value.trim().replace(SpaceRegex, "");
  }

  // 데이터 업데이트
  function updateData(arr) {
    const data = arr;
    setComponyName(data[0].place_name);
    setDescription(data[0].manager_phone);
    setManagerPhone(data[0].manager_phone);
    setPhoneNumber(data[0].phone);
    setHomePage(data[0].homepage);
    setAddress(data[0].address);
    setInsta(data[0].instagram);
    // 수정 메소드로 바꾸기
    setMethods("put");
  }

  // store에서 데이터 찾기
  function findData(arr) {
    // userId와 대조 후 배열값 리턴
    const result = arr.filter((v, i) => {
      return v.teahouse_id === Number(params);
    });
    return result;
  }

  // 파일의 갯수 체크
  function checkFileUploadNum(files) {
    if (files.length > 3) {
      alert("파일의 갯수가 너무 많습니다");
      return true;
    } else {
      console.log(files);
      setSubmitFiles(files);
      return false;
    }
  }

  // 로컬 이미지 파일의 경로 추출
  function imgFilePath(files) {
    let fileImgs = [];
    // 파일의 이미지가 있다면?
    if (files.length > 0) {
      fileImgs = Array.from(files).map((v, i) => {
        return URL.createObjectURL(files[i]);
      });
      // state에 이미지 파일 path 넣어주기
      setImgs(fileImgs);
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="tea-detail-container">
      <Form>
        {/* images */}
        <Carousels srcs={imgs} />
        <input
          type="file"
          name=""
          id=""
          multiple
          onChange={(e) => {
            e.preventDefault();
            //   체인지 이벤트 발생시 파일의 갯수 평가
            if (checkFileUploadNum(e.currentTarget.files)) {
              e.currentTarget.value = "";
            } else {
              console.log(URL.createObjectURL(e.currentTarget.files[0]));
              imgFilePath(e.currentTarget.files);
            }
          }}
        />
        {/* text */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>상호명</Form.Label>
          <Form.Control
            type="text"
            placeholder="상호명을 입력하세요"
            maxLength="10"
            value={componyName}
            onChange={(e) => {
              e.preventDefault();
              setComponyName(e.currentTarget.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
          <Form.Label>설명</Form.Label>
          <Form.Control
            type="text"
            placeholder="매장을 설명해주세요"
            value={description}
            onChange={(e) => {
              e.preventDefault();
              setDescription(e.currentTarget.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
          <Form.Label>전화번호</Form.Label>
          <Form.Control
            type="text"
            placeholder="전화번호를 입력하세요"
            value={phoneNumber}
            onChange={(e) => {
              e.preventDefault();
              setPhoneNumber(e.currentTarget.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
          <Form.Label>매니저 번호</Form.Label>
          <Form.Control
            type="text"
            placeholder="매니저 전화번호를 입력하세요"
            value={managerPhone}
            onChange={(e) => {
              e.preventDefault();
              setManagerPhone(e.currentTarget.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
          <Form.Label>주소</Form.Label>
          <Form.Control
            type="text"
            placeholder="전화번호를 입력하세요"
            value={address}
            onChange={(e) => {
              e.preventDefault();
              setAddress(e.currentTarget.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
          <Form.Label>홈페이지</Form.Label>
          <Form.Control
            type="text"
            placeholder="홈페이지 주소를 입력하세요"
            value={homePage}
            onChange={(e) => {
              e.preventDefault();
              setHomePage(e.currentTarget.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
          <Form.Label>인스타그램</Form.Label>
          <Form.Control
            type="text"
            placeholder="인스타그램 주소를 입력해주세요"
            value={insta}
            onChange={(e) => {
              e.preventDefault();
              setInsta(e.currentTarget.value);
            }}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            dispatch(
              teaList({ method: methods, value: SubmitData, user: params })
            );
          }}
        >
          Submit
        </Button>
        <Button
          variant="danger"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            dispatch(teaList({ method: "delete", user: params }));
          }}
        >
          삭제
        </Button>
      </Form>
    </div>
  );
};

// 캐러셀 컴포넌트
function Carousels(props) {
  // console.log("넘겨받은 파일 " + props.srcs);
  // states
  const [srcs, setSrcs] = useState(props.srcs);

  function carouselImg() {
    return (
      <Carousel.Item>
        <img
          height={100}
          className="d-block w-100"
          src="http://localhost:3000/2be52491-1f7c-4bb3-8a12-da0d4c64408d
      "
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }
  // hooks
  useEffect(() => {}, [srcs]);
  return <Carousel>{carouselImg()}</Carousel>;
}

Carousels.defaultProps = {
  srcs: [],
};

// 이미지 캐러셀 컴포넌트

export default TeaDetails;
