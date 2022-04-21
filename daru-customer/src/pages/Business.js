import React, { useState } from "react";

import BackButton from "../components/BackButton";
import Buttons from "../components/Buttons";

import "../asset/Business.scss";

const Business = () => {
  const [info, setInfo] = useState("Y");
  const [fileName, setFile] = useState("");
  return (
    <div className="businsess-container">
      <BackButton></BackButton>
      <h1>
        신청하시는 분이
        <br />
        사업자 등록증에서의 대표자이신가요?
      </h1>
      <div className="select">
        <input
          type="radio"
          id="select"
          name="owners"
          onClick={() => {
            setInfo("Y");
          }}
        />
        <label htmlFor="select">네</label>
        <input
          type="radio"
          id="select2"
          name="owners"
          onClick={() => {
            setInfo("N");
          }}
        />
        <label htmlFor="select2">아니오</label>
      </div>
      <div className="businsess-container info">
        {info === "Y" ? <Info1 /> : <Info2 />}
      </div>
      <form className="businsess-container box-upload">
        <label htmlFor="input-file" className="businsess-container upload">
          업로드
        </label>
        <p className="businsess-container box-upload-filename">{fileName}</p>
        <input
          type="file"
          id="input-file"
          style={{ display: "none" }}
          accept="image/png, image/jpeg, image/jpg, .pdf"
          onChange={(e) => {
            setFile(`${e.target.files[0].name}`);
          }}
        />

        <Buttons sentence="제출" click="submit"></Buttons>
      </form>
    </div>
  );
};

function Info1() {
  return (
    <div>
      <h3>필요서류: 사업자 등록증</h3>
      <p>
        1. jpg, jpeg, pdf, png 형태로 5MB 이내가 되도록 해주세요.
        <br />
        2. 첨부 서류에 주민번호 뒷자리가 보이지 않도록 해주세요.
        <br />
        3. 주민번호가 보이는 서류의 경우, 인증 절차가 반려되니 주의하여 주시기
        바랍니다.
        <br />
        4. 본 과정을 통해 진행할 수 없는 경우, 고객센터(1588-1488)에 문의
        바랍니다.
        <br />
      </p>
    </div>
  );
}
function Info2() {
  return (
    <div>
      <h3>필요서류: 사업자 등록증명</h3>
      <p>
        1. jpg, jpeg, pdf, png 형태로 5MB 이내가 되도록 해주세요.
        <br />
        2. 첨부 서류에 주민번호 뒷자리가 보이지 않도록 해주세요.
        <br />
        3. 발급하신지 90일이 지나지 않은 서류를 제출해주세요.
        <br />
        4. 주민번호가 보이는 서류의 경우, 인증 절차가 반려되니 주의하여 주시기
        바랍니다.
        <br />
        5. 본 과정을 통해 진행할 수 없는 경우, 고객센터(1588-1488)에 문의
        바랍니다.
        <br />
      </p>
    </div>
  );
}
export default Business;
