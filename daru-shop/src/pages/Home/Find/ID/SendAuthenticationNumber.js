import React, { useState, useEffect, useRef } from 'react';

// store 값 가지고 오기
import FindIdStore from '../../../../Store/FindIdStore';
import SelectTel from '../../../../components/Home/SelectTel';

// 유효성검사 클래스 가져오기
import RegexHelper from '../../../../asset/js/RegexHelper';




// 아이디 찾기 첫번째 휴대폰 인증 페이지
const SendAuthenticationNumber = (props) => {
    console.clear();
    const regexHelper = new RegexHelper();
    // store 구독하기
    const { setPhoneNum, setResult, sendAuthenticationNum, result } = FindIdStore();

    useEffect(() => {
        // 통신상태가 200이면 /Findid/Check
        (result?.status === 200 && props.page('/Findid/Check'));
    }, [result]);

    // 값을 초기화, 포커스 시켜주기 위한 REF변수
    const middleNumber = useRef();
    const lastNumber = useRef();
    const ref = useRef({ middleNumber, lastNumber });

    useEffect(() => {
        console.log(middleNumber);
        console.log(lastNumber);
    }, [ref])

    // 인풋 밸류s
    const [phoneFirstNumber, setFirstNumber] = useState("010")
    const [phoneMiddleNumber, setPhoneMiddleNumber] = useState(null);
    const [phoneLastNumber, setPhoneLastNumber] = useState(null);


    return (
        <div>
            {/* SelectTel 컴포넌트에 첫번째 두번째 세번째 번호를 보냅니다. */}
            <SelectTel title="아이디찾기" options={["010", "011"]} getFirstNumber={setFirstNumber} getMiddleNumber={setPhoneMiddleNumber} getLastNumber={setPhoneLastNumber} ref={ref} />
            <button className="green-btn __md __find" type="button"
                onClick={(e) => {
                    e.preventDefault();

                    if (regexHelper.checkPhoneNum("string", phoneMiddleNumber, middleNumber) && regexHelper.checkPhoneNum("string", phoneLastNumber, lastNumber, 4, 4)) {
                        // 성공하면 인증번호 보내기
                        setPhoneNum("");
                        setResult({});
                        // 
                        setPhoneNum(`${phoneFirstNumber}${phoneMiddleNumber}${phoneLastNumber}`);
                        sendAuthenticationNum();
                    }

                    // store에 저장된 값 초기화


                }}>인증번호 보내기</button>
        </div>
    );
};

SendAuthenticationNumber.defaultProps = {

}

export default SendAuthenticationNumber;