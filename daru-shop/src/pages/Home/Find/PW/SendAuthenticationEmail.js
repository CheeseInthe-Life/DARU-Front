import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

// custom-hooks
import useResize from "../../../../asset/js/useResize";

// helpers
import RegexHelper from "../../../../asset/js/RegexHelper";
// components
import Input from "../../../../components/Input";

function SendAuthenticationEmail(props) {
  // resize custom hook
  const isMd = useResize();
  const [email, setEmail] = useState(null);
  const inputEmail = useRef();

  return (
    <>
      <Input size={isMd} title="이메일" id="userEmail" type="email" placeholder="가입에 사용하신 이메일을 입력하세요" getValue={setEmail} pattern="[^ @]*@[^ @]*" ref={inputEmail} />
      <button
        className="green-btn __md __find"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          if (RegexHelper.checkEmail("string", email, inputEmail, 0, 30)) {
            // id를 null로 바꾸기
            props.page("/Home/Findpw/Check");
            return console.log("통과");
          }
          setEmail(null);
        }}
      >
        인증번호 보내기
      </button>
    </>
  );
}

SendAuthenticationEmail.defaultProps = {

};

SendAuthenticationEmail.propTypes = {
  page: PropTypes.func,
};

export default SendAuthenticationEmail;
