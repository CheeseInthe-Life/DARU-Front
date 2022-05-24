import React, { useState, useEffect } from 'react';
import axios from 'axios';
// store 값 가지고 오기
import useStore from '../../../../Slice/FindIdStore';
import SelectTel from '../../../../components/Home/SelectTel';

// 설정파일
const config = require('../../../../asset/js/config');

// 아이디 찾기 첫번째 휴대폰 인증 페이지
const SendAuthenticationNumber = (props) => {
    // store 구독하기
    const { setPhoneNum, setResult, sendAuthenticationNum, result } = useStore();

    useEffect(() => {
        (result.status === 200 && props.page('/Findid/Check'));
    }, [result])

    const [phoneFirstNumber, setFirstNumber] = useState("010")
    const [phoneMiddleNumber, setPhoneMiddleNumber] = useState(null);
    const [phoneLastNumber, setPhoneLastNumber] = useState(null);
    return (
        <div>
            {/* SelectTel 컴포넌트에 첫번째 두번째 세번째 번호를 보냅니다. */}
            <SelectTel title="아이디찾기" options={["010", "011"]} getFirstNumber={setFirstNumber} getMiddleNumber={setPhoneMiddleNumber} getLastNumber={setPhoneLastNumber}></SelectTel>
            <button className="green-btn __md __find" type="button"
                onClick={(e) => {
                    e.preventDefault();
                    // store에 저장된 값 바꾸기
                    setPhoneNum("");
                    setResult({});
                    setPhoneNum(`${phoneFirstNumber}${phoneMiddleNumber}${phoneLastNumber}`);
                    sendAuthenticationNum();

                    // 성공하면 인증번호 보내기

                }}>인증번호 보내기</button>
        </div>
    );
};

SendAuthenticationNumber.defaultProps = {

}

export default SendAuthenticationNumber;