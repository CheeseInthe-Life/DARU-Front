import React, { useState } from 'react';

import Input from '../../../../components/Input';
import Timer from '../../../../components/Timer';



const CheckAuthenticationEmail = (props) => {
    const [authenticationNumber, setAuthenticationNumber] = useState("");
    const [isCheck, setIsCheck] = useState(true);

    return (
        <React.Fragment>
            <Input title="인증번호" id="userAuthenticationNumber" type="text" placeholder="인증번호를 입력하세요" getValue={setAuthenticationNumber} pattern="[0-9]+" maxLength={6} />
            <span className="find-input-container-text"> 유효시간 :  {<Timer mm="3" ss="0" />} </span>
            <button className="green-btn __md" type="submit">인증하기</button>
            {isCheck && <button className="green-btn __md __find" onClick={() => {
                props.page("/Findpw/Resetpw")
            }}>다음</button>}
            <button className="white-btn __gray">이메일 인증이 필요합니다</button>
        </React.Fragment>
    );
};

CheckAuthenticationEmail.defaultProps = {

}

export default CheckAuthenticationEmail;