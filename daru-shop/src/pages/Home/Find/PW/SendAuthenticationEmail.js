import React, { useState, useEffect } from 'react';

import Input from '../../../../components/Input';

const SendAuthenticationEmail = (props) => {
    const [email, setEmail] = useState(null);

    return (
        <React.Fragment>
            <Input title="이메일" id="userEmail" type="email" placeholder="가입에 사용하신 이메일을 입력하세요" getValue={setEmail} pattern="[^ @]*@[^ @]*" />
            <button className="green-btn __md __find" type="button" onClick={(e) => {
                e.preventDefault();

                props.page("/Findpw/Check")
            }}>인증번호 보내기</button>
        </React.Fragment>
    );
};

SendAuthenticationEmail.defaultProps = {

}

export default SendAuthenticationEmail;