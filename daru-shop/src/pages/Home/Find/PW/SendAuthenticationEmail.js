import React, { useState, useEffect, useRef } from 'react';
import RegexHelper from '../../../../asset/js/RegexHelper';

import Input from '../../../../components/Input';

const SendAuthenticationEmail = (props) => {
    const [email, setEmail] = useState(null);


    const inputEmail = useRef();

    return (
        <React.Fragment>
            <Input title="이메일" id="userEmail" type="email" placeholder="가입에 사용하신 이메일을 입력하세요" getValue={setEmail} pattern="[^ @]*@[^ @]*" ref={inputEmail} />
            <button className="green-btn __md __find" type="button" onClick={(e) => {
                e.preventDefault();
                if (RegexHelper.checkEmail('string', email, inputEmail, 0, 30)) {
                    // id를 null로 바꾸기
                    props.page("/Findpw/Check");
                    return console.log("통과");
                } else {
                    setEmail(null);
                }

            }}>인증번호 보내기</button>
        </React.Fragment>
    );
};

SendAuthenticationEmail.defaultProps = {

}

export default SendAuthenticationEmail;