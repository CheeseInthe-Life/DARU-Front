import React, { useState, useEffect } from 'react';

import useStore from "../../../../Slice/FindIdStore"

import Input from '../../../../components/Input';
import Timer from '../../../../components/Timer';

const CheckAuthenticationNumber = (props) => {
    // store에서 값 가져오기
    const { setAuthenticationNum, checkAuthenticationNum } = useStore();

    const [authenticationNumber, setAuthenticationNumber] = useState("");
    const [isTrue, setIsTrue] = useState(true);

    useEffect(() => {
        console.log(authenticationNumber);
    }, [authenticationNumber])

    return (
        <React.Fragment>
            <Input title="인증번호" id="userId" type="text" placeholder="인증번호를 입력하세요" getValue={setAuthenticationNumber} pattern="[0-9]+" maxLength={6} required={true} />
            <span className="find-input-container-text"> 유효시간 :  {<Timer mm="0" ss="10" page={props.page} />} </span>
            <button className="green-btn __md" onClick={(e) => {
                e.preventDefault();
                setAuthenticationNum(authenticationNumber);
                checkAuthenticationNum();
            }}>인증하기</button>

            {isTrue && <button className="white-btn __find" onClick={(e) => {
                e.preventDefault();
                props.page("/Findid/Final");
            }}>다음</button>}
            <button className="white-btn __gray" onClick={(e) => {
                e.preventDefault();
            }}> 휴대폰 인증이 필요합니다</button>
        </React.Fragment>
    );
};

CheckAuthenticationNumber.defaultProps = {
    value: "",
    getValue: function () {
        return console.log("value를 입력하세요");
    }
}
export default CheckAuthenticationNumber;