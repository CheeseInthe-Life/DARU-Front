import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

// store
import phoneAuthenticCationStore from "../../../Store/phoneAuthenticCationStore";
import JoinStore from "../../../Store/JoinStore";

// custom-hooks
import useResize from "../../../asset/js/useResize";

// helpers
import RegexHelper from "../../../asset/js/RegexHelper";
import { transJoinServerDate } from "../../../asset/js/DateHelper";

// component
import Subtitle from "../../../components/Subtitle";
import TextArea from "../../../components/Home/TextArea";
import CheckBox from "../../../components/CheckBox";
import Input from "../../../components/Input";
import SelectTel from "../../../components/Home/SelectTel";
import AuthButton from "../../../components/AuthButton";
import TextInfo from "../../../components/TextInfo";
import TextInfo2 from "../../../components/TextInfo2";
import RadioBox from "../../../components/RadioBox";
import Timer from "../../../components/Timer";

// styled-components
const AuthenticationButtonStyle = {
  width: "",
  marginLeft: "10px",
  fontSize: "16px",
  fontWeight: 500,
  height: "50px",
};

function JoinStart(props) {
  // console.clear();
  // custom-hooks
  const isMd = useResize();
  const navigate = useNavigate();
  // 데이터 store에 보관
  const { setJoinData, sendUserJoinServer } = JoinStore();
  const { setPhoneNum, setResult, sendAuthenticationNum, checkAuthenticationNum, } = phoneAuthenticCationStore();


  // 입력값들
  const [email, setEmail] = useState(null);
  const [emailAuthentication, setEmailAuthentication] = useState(null);
  const [phoneFirstNumber, setPhoneFirstNumber] = useState("010");
  const [phoneMiddleNumber, setPhoneMiddleNumber] = useState(null);
  const [phoneLastNumber, setPhoneLastNumber] = useState(null);
  const [phone, setPhone] = useState(null);
  const [phoneAuthentication, setPhoneAuthentication] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordRe, setPasswordRe] = useState(null);
  const [birth, setBirth] = useState(null);
  const [gender, setGender] = useState(null);

  // 비밀번호와 재확인이 같지 않을경우
  const [isNotSamePassword, setIsNotSamePassword] = useState(true);

  // ref
  const emailInputRef = useRef();
  const emailAuthenticationInputRef = useRef();
  const middleNumber = useRef();
  const lastNumber = useRef();
  const phoneRef = useRef({ middleNumber, lastNumber });
  const phoneAuthenticationInputRef = useRef();
  const passwordInputRef = useRef();
  const passwordReInputRef = useRef();
  const birthInputRef = useRef();
  const inputRef = useRef([]);

  // 비밀번호와 재확인이 같지 않을경우
  useEffect(() => {
    if (password === passwordRe) {
      setIsNotSamePassword(false);
    } else {
      setIsNotSamePassword(true);
    }
  }, [passwordRe]);

  useEffect(() => {
    setPhone(`${phoneFirstNumber}${phoneMiddleNumber}${phoneLastNumber}`);
  }, [phoneFirstNumber, phoneMiddleNumber, phoneLastNumber]);

  return (
    <React.Fragment>
      <div className="join-input-container">
        <Subtitle size={isMd} title="기본정보 입력" />

        <div className="join-select-box">
          <Input sort={isMd} size={isMd} placeholdersize={isMd} title="이메일" id="userEmail" type="email" placeholder="가입에 사용하신 이메일을 입력하세요." pattern="/^[0-9]+$/" ref={emailInputRef} getValue={setEmail} />
          <AuthButton size={isMd} style={isMd == "md" ? { marginLeft: "12px" } : { marginLeft: "0px" }} title="이메일 인증" onClick={() => {
            console.log(email);
            console.log(emailInputRef);
            if (RegexHelper.checkEmail("string", email, emailInputRef)) {

            }
          }} />
        </div>
        <span style={{ color: "#3DA38D", marginTop: "-3px" }}>
          이메일 인증 유효시간
          {" "}
          <Timer mm="5" ss="0" />
        </span>

        <div className="join-select-box">
          <Input sort={isMd} size={isMd} placeholdersize={isMd} title="이메일 인증 번호" id="userAutenticationEmail" type="text" placeholder="인증번호를 입력해주세요" ref={emailAuthenticationInputRef} getValue={setEmailAuthentication} maxLength={6} />
          <button type="button"
            className="green-btn __md"
            style={isMd === "md" ? {
              width: "150px", marginLeft: "10px", fontSize: "16px", fontWeight: 500, height: "50px", lineHeight: "50px",
            } : {
              width: "320px", fontSize: "16px", fontWeight: 500, height: "50px", lineHeight: "50px",
            }}
            onClick={() => {
              if (RegexHelper.checkAuthNum("string", emailAuthentication, emailAuthenticationInputRef)) {

              }
            }}>
            인증번호 확인
          </button>
        </div>
        <TextInfo text="이메일 인증번호가 일치하지 않습니다." />

        <div className="join-select-box">
          <SelectTel size={isMd} title="휴대폰" ref={phoneRef} getFirstNumber={setPhoneFirstNumber} getMiddleNumber={setPhoneMiddleNumber} getLastNumber={setPhoneLastNumber} options={["010", "011"]} />
          <AuthButton size={isMd} title="휴대폰 인증" style={isMd == "sm" ? { marginTop: "-15px" } : { marginTop: "0px" }} onClick={() => {
            if (RegexHelper.checkPhoneNum("string", phoneMiddleNumber, phoneRef.current.middleNumber) && RegexHelper.checkPhoneNum("string", phoneLastNumber, phoneRef.current.lastNumber)) {
              console.log(phone);
              setPhoneNum(phone);
              sendAuthenticationNum();
            }
          }} />
        </div>
        <span style={{ color: "#3DA38D", marginTop: "-3px" }}>
          휴대폰 인증 유효시간
          {" "}
          <Timer mm="5" ss="0" />
        </span>
        {/* 인증번호 확인 */}
        <div className="join-select-box">
          <Input sort={isMd} size={isMd} title="인증번호" id="userAuthenticationNumber" placeholder="인증번호를 입력해주세요." type="text" ref={phoneAuthenticationInputRef} getValue={setPhoneAuthentication} maxLength={6} />
          <button
            className="green-btn __md"
            style={isMd === "md" ? {
              width: "150px", marginLeft: "10px", fontSize: "16px", fontWeight: 500, height: "50px", lineHeight: "50px",
            } : {
              width: "320px", fontSize: "16px", fontWeight: 500, height: "50px", lineHeight: "50px",
            }}
            type="button"
            onClick={() => {
              if (RegexHelper.checkAuthNum("string", phoneAuthentication, phoneAuthenticationInputRef)) {
                // 서버로 통신
                checkAuthenticationNum(phoneAuthentication);
              }
            }}>
            인증번호 확인
          </button>
        </div>
        <TextInfo text="휴대폰 인증번호가 일치하지 않습니다." />

        <Input sort={isMd} size={isMd} title="비밀번호" id="userPassword" placeholder="비밀번호를 입력해주세요." type="password" ref={passwordInputRef} getValue={setPassword} />

        <article style={isMd == "md" ? { marginLeft: "200px", marginTop: "-15px" } : { marginLeft: "0px", marginTop: "-10px" }}>
          <TextInfo2 size="sm" title={["패스워드 형식", "특수문자 33자"]} description={["특수문자, 숫자, 영어 하나 이상 포함, 8~20개 사이의 문자열", "! \" # $ % & ` () * + , - . / : ; < = > ? @[＼] ^ _` { | } ~ \)"]} />
        </article>

        <Input sort={isMd} size={isMd} title="비밀번호 재확인" id="userRePassword" placeholder="비밀번호를 재입력해주세요." type="password" ref={passwordReInputRef} getValue={setPasswordRe} />
        {isNotSamePassword && <TextInfo text="비밀번호가 일치하지 않습니다." />}

        <Input sort={isMd} size={isMd} title="생년월일" id="userBirth" placeholder="생년월일 6자리를 입력해주세요 ex) 991231" maxLength={6} ref={birthInputRef} getValue={setBirth} />

        <RadioBox size={isMd} title="성별" labelValue={["남자", "여자", "지정안함"]} value={["male", "female", "none"]} getValue={setGender} />
      </div>

      <div className="join-submit-container">
        <button
          className="green-btn __md"
          type="button"
          onClick={(e) => {
            e.preventDefault();

            // if (RegexHelper.checkEmail("string", email, emailInputRef) && RegexHelper.checkAuthNum("string", emailAuthentication, emailAuthenticationInputRef) && RegexHelper.checkPhoneNum("string", phoneMiddleNumber, phoneRef.current.middleNumber) && RegexHelper.checkPhoneNum("string", phoneLastNumber, phoneRef.current.lastNumber) && RegexHelper.checkAuthNum("string", phoneAuthentication, phoneAuthenticationInputRef) && RegexHelper.checkPassword("string", password, passwordInputRef) && RegexHelper.checkBirthDay("string", birth, birthInputRef)) {
            //   // 모든 유효성 끝나고
            //   if (gender === null) {
            //     return alert("성별을 입력해주세요.");
            //   } else {
            //     // 날짜형식변환 -> (YYMMDD -> YYYY-MM-DD)
            //     const birthday = transJoinServerDate(birth);
            //     console.log(birthday);
            //     // 스토어에 값 저장시키기
            //     setJoinData(email, phone, password, birthday, gender);
            //     sendUserJoinServer();
            navigate("/Join/Start1?id=1");
            //   }
            // }
          }}
        >
          다루 시작하기
        </button>
      </div>
    </React.Fragment >
  );
}

JoinStart.propTypes = {
  page: PropTypes.func,
};

export default JoinStart;
