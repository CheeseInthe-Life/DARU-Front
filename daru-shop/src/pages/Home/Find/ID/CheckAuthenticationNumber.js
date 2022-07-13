import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

// custom hooks
import useResize from "../../../../asset/js/useResize";

// helper
import RegexHelper from "../../../../asset/js/RegexHelper";
// store
import phoneAuthenticCationStore from "../../../../Store/phoneAuthenticCationStore";
// components
import Input from "../../../../components/Input";
import Timer from "../../../../components/Timer";

function CheckAuthenticationNumber(props) {
  // resize custom hook
  const isMd = useResize();
  // store에서 값 가져오기
  const { setAuthenticationNum, checkAuthenticationNum, result } = phoneAuthenticCationStore();

  const [authenticationNumber, setAuthenticationNumber] = useState("");
  const [isTrue, setIsTrue] = useState(false);

  // ref
  const input = useRef();

  // 아직 로그인 서버가 제대로 동작하지 않음
  useEffect(() => {
    if (result?.data?.rtmsg === "OK") {
      setIsTrue(true);
    } else {
      setIsTrue(false);
    }
  }, [result]);

  return (
    <>
      <Input size={isMd} title="인증번호" id="authNum" type="text" placeholder="인증번호를 입력하세요" getValue={setAuthenticationNumber} pattern="[0-9]+" maxLength={6} required ref={input} />
      <span className="find-input-container-text">
        {" "}
        유효시간 :
        <Timer mm="3" ss="0" page={props.page} />
      </span>
      <button
        className="green-btn __md"
        onClick={(e) => {
          e.preventDefault();
          if (RegexHelper.checkAuthNum("string", authenticationNumber, input)) {
            checkAuthenticationNum(authenticationNumber);
          }
        }}
      >
        인증하기
      </button>

      <button
        className="white-btn __green"
        onClick={(e) => {
          e.preventDefault();
          props.page("/Home/Findid/Final");
        }}
      >
        다음
      </button>
      <button
        className="white-btn __gray"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        {" "}
        휴대폰 인증이 필요합니다
      </button>

    </>
  );
}

CheckAuthenticationNumber.defaultProps = {
  value: "",
  page: "/",
  getValue() {
    return console.log("value를 입력하세요");
  },
};

CheckAuthenticationNumber.propTypes = {
  page: PropTypes.func,
};

export default CheckAuthenticationNumber;
