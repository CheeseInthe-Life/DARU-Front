import React, { useState, useEffect, useRef } from 'react';

import RegexHelper from '../../../../asset/js/RegexHelper';
// store
import FindIdStore from "../../../../Store/FindIdStore";


import Input from '../../../../components/Input';
import Timer from '../../../../components/Timer';

const CheckAuthenticationNumber = (props) => {
    // store에서 값 가져오기
    const { setAuthenticationNum, checkAuthenticationNum, result } = FindIdStore();

    const [authenticationNumber, setAuthenticationNumber] = useState("");
    const [isTrue, setIsTrue] = useState(false);

    const input = useRef();

    // 아직 로그인 서버가 제대로 동작하지 않음
    useEffect(() => {
        if (result?.data?.rtmsg === 'OK') {
            setIsTrue(true);
        } else {
            setIsTrue(false);
        }
    }, [result])

    useEffect(() => {
        console.log(input);
    }, [])

    return (
        <React.Fragment>
            <Input title="인증번호" id="authNum" type="text" placeholder="인증번호를 입력하세요" getValue={setAuthenticationNumber} pattern="[0-9]+" maxLength={6} required={true} ref={input} />
            <span className="find-input-container-text"> 유효시간 :  {<Timer mm="3" ss="0" page={props.page} />} </span>
            <button className="green-btn __md" onClick={(e) => {
                e.preventDefault();
                if (RegexHelper.checkAuthNum("string", authenticationNumber, input)) {
                    checkAuthenticationNum(authenticationNumber);
                }
            }}>인증하기</button>

            {isTrue ? <button className="white-btn __find" onClick={(e) => {
                e.preventDefault();
                props.page("/Findid/Final");
            }}>다음</button> : <button className="white-btn __gray" onClick={(e) => {
                e.preventDefault();
            }}> 휴대폰 인증이 필요합니다</button>}

        </React.Fragment>
    );
};

CheckAuthenticationNumber.defaultProps = {
    value: "",
    page: "/",
    getValue: function () {
        return console.log("value를 입력하세요");
    }
}
export default CheckAuthenticationNumber;