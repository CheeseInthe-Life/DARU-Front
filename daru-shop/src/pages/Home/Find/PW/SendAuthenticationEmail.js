import React, { useState, useEffect, useRef } from 'react';
import RegexHelper from '../../../../asset/js/RegexHelper';

import Input from '../../../../components/Input';

const SendAuthenticationEmail = (props) => {

    const [email, setEmail] = useState(null);


    const inputEmail = useRef();
    // windowSize가 821미만이면 모바일
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
    });
    const [isMd, setIsMd] = useState(
        windowSize.width < 821 ? "sm" : "md"
    );
    // resize이벤트가 발생할때 사용할 콜백함수
    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth
        });
    };

    // resize 이벤트 발생 시 이벤트 감지
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    // width가 821미만이라면 sm사이즈 scss 클래스 불러오기
    useEffect(() => {
        if (windowSize.width < 821) {
            setIsMd("sm");
        } else {
            setIsMd("md");
        }
    }, [windowSize]);
    return (
        <React.Fragment>
            <Input size={isMd} title="이메일" id="userEmail" type="email" placeholder="가입에 사용하신 이메일을 입력하세요" getValue={setEmail} pattern="[^ @]*@[^ @]*" ref={inputEmail} />
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