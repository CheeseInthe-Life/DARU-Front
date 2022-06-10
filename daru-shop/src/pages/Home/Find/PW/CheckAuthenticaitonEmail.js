import React, { useState, useRef, useEffect } from 'react';
import RegexHelper from '../../../../asset/js/RegexHelper';
import Input from '../../../../components/Input';
import Timer from '../../../../components/Timer';




const CheckAuthenticationEmail = (props) => {
    const [authenticationNumber, setAuthenticationNumber] = useState("");
    const [isCheck, setIsCheck] = useState(false);
    const inputAuthNum = useRef();

    return (
        <React.Fragment>
            <Input title="인증번호" id="userAuthenticationNumber" type="text" placeholder="인증번호를 입력하세요" getValue={setAuthenticationNumber} pattern="[0-9]+" maxLength={6} ref={inputAuthNum} />
            <span className="find-input-container-text"> 유효시간 :  {<Timer mm="3" ss="0" />} </span>
            {!isCheck && <button className="green-btn __md" type="click" onClick={(e) => {
                e.preventDefault();
                if (RegexHelper.checkAuthNum("string", authenticationNumber, inputAuthNum, 1, 7)) {
                    setIsCheck(true);
                } else {
                    setIsCheck(false);
                }
            }}>인증하기</button>}
            {isCheck ? <button className="green-btn __md __find" onClick={() => {
                props.page("/Findpw/Resetpw")
            }}>다음</button> : <button className="white-btn __gray">이메일 인증이 필요합니다</button>}

        </React.Fragment>
    );
};

CheckAuthenticationEmail.defaultProps = {

}

export default CheckAuthenticationEmail;