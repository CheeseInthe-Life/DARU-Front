import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components'

import RegexHelper from '../../../asset/js/RegexHelper';

// component
import Subtitle from '../../../components/Subtitle';
import TextArea from '../../../components/Home/TextArea';
import CheckBox from '../../../components/CheckBox';
import Input from '../../../components/Input';
import SelectTel from '../../../components/Home/SelectTel';
import AuthButton from '../../../components/AuthButton';
import TextInfo from '../../../components/TextInfo';
import TextInfo2 from '../../../components/TextInfo2';
import RadioBox from '../../../components/RadioBox';
import Timer from '../../../components/Timer';

const AuthenticationButtonStyle = {
    width: "",
    marginLeft: "10px",
    fontSize: "16px",
    fontWeight: 500,
    height: "50px",
}

const JoinStart = (props) => {
    // 타이틀 바꾸기
    // useEffect(() => {
    //     props.title("매장 등록");
    // }, [])
    const navigate = useNavigate();

    // 입력값들
    const [email, setEmail] = useState(null);
    const [phoneMiddleNumber, setPhoneMiddleNumber] = useState(null);
    const [phoneLastNumber, setPhoneLastNumber] = useState(null);
    const [authenticationNumber, setAuthenticationNumber] = useState(null);
    const [password, setPassword] = useState(null);
    const [passwordRe, setPasswordRe] = useState(null);
    const [birth, setBirth] = useState(null);
    const [gender, setGender] = useState(null);

    // 비밀번호와 재확인이 같지 않을경우
    const [isNotSamePassword, setIsNotSamePassword] = useState(true);
    console.log(isNotSamePassword);
    useEffect(() => {
        if (password === passwordRe) {
            setIsNotSamePassword(false);
        } else {
            setIsNotSamePassword(true);
        }
    }, [passwordRe])


    // DOM이 담길 ref 배열
    const middleNumber = useRef();
    const lastNumber = useRef();
    const phoneRef = useRef({ middleNumber, lastNumber });
    // inputRef 이메일, 인증번호, 비밀번호, 비밀번호 재확인, 생년월일 순
    const inputRef = useRef([]);

    // useEffect(() => {
    //     console.log(inputRef);
    //     console.log(phoneRef);
    // }, [inputRef, phoneRef]);

    // page view
    // mediaQuery가 821미만이면 모바일
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
        })
    };

    // resize 이벤트 발생 시 이벤트 감지
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        console.log(1);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])
    // 821 미만이면 sm , md
    useEffect(() => {
        (windowSize.width < 821) ?
            setIsMd("sm")
            :
            setIsMd("md")
    }, [windowSize]);



    return (
        <form className="join-container">
            <div className="join-input-container">
                <Subtitle size={isMd} title="기본정보 입력" />

                <div className="join-select-box">
                    <Input sort={isMd} size={isMd} placeholdersize={isMd} title="이메일" id="userEmail" type="email" placeholder="가입에 사용하신 이메일을 입력하세요." pattern="/^[0-9]+$/" ref={el => (inputRef.current[0] = el)} getValue={setEmail} />
                    <AuthButton size={isMd} style={isMd == "md" ? { marginLeft: '12px' } : { marginLeft: '0px' }} title="이메일 인증" />
                </div>
                <span style={{ color: "#3DA38D", marginTop: "-3px" }}>
                    이메일 인증 유효시간 {<Timer mm="5" ss="0" />}
                </span>



                <div className="join-select-box">
                    <Input sort={isMd} size={isMd} placeholdersize={isMd} title="이메일 인증 번호" id="userAutenticationEmail" type="email" placeholder="인증번호를 입력해주세요" pattern="/^[0-9a-z]+$/" ref={el => (inputRef.current[0] = el)} getValue={setEmail} maxLength={6} />

                    <button className="green-btn __md" style={isMd === "md" ? { width: "150px", marginLeft: "10px", fontSize: "16px", fontWeight: 500, height: "50px", lineHeight: "50px" } : { width: "320px", fontSize: "16px", fontWeight: 500, height: "50px", lineHeight: "50px" }}>인증번호 확인</button>
                </div>
                <TextInfo text="이메일 인증번호가 일치하지 않습니다." />



                <div className="join-select-box">
                    <SelectTel size={isMd} title="휴대폰" ref={phoneRef} getMiddleNumber={setPhoneMiddleNumber} getLastNumber={setPhoneLastNumber} />
                    <AuthButton size={isMd} title="휴대폰 인증" style={isMd == "sm" ? { marginTop: '-15px' } : { marginTop: "0px" }} />
                </div>
                <span style={{ color: "#3DA38D", marginTop: "-3px" }}>
                    휴대폰 인증 유효시간 {<Timer mm="5" ss="0" />}
                </span>



                <div className="join-select-box">
                    <Input sort={isMd} size={isMd} title="인증번호" id="userAuthenticationNumber" placeholder="인증번호를 입력해주세요." type="password" ref={el => (inputRef.current[1] = el)} getValue={setAuthenticationNumber} />
                    <button className="green-btn __md" style={isMd === "md" ? { width: "150px", marginLeft: "10px", fontSize: "16px", fontWeight: 500, height: "50px", lineHeight: "50px" } : { width: "320px", fontSize: "16px", fontWeight: 500, height: "50px", lineHeight: "50px" }}>인증번호 확인</button>
                </div>
                <TextInfo text="휴대폰 인증번호가 일치하지 않습니다." />



                <Input sort={isMd} size={isMd} title="비밀번호" id="userPassword" placeholder="비밀번호를 입력해주세요." type="password" ref={el => (inputRef.current[2] = el)} getValue={setPassword} />

                <article style={isMd == "md" ? { marginLeft: "200px", marginTop: "-15px" } : { marginLeft: "0px", marginTop: "-10px" }}>
                    <TextInfo2 size={"sm"} title={["패스워드 형식", "특수문자 33자"]} description={["특수문자, 숫자, 영어 하나 이상 포함, 8~20개 사이의 문자열", "! \" # $ % & ` () * + , - . / : ; < = > ? @[＼] ^ _` { | } ~ \)"]} />
                </article>
                <Input sort={isMd} size={isMd} title="비밀번호 재확인" id="userRePassword" placeholder="비밀번호를 재입력해주세요." type="password" ref={el => (inputRef.current[3] = el)} getValue={setPasswordRe} />
                {!isNotSamePassword && <TextInfo text="비밀번호가 일치하지 않습니다."></TextInfo>}

                <Input sort={isMd} size={isMd} title="생년월일" id="userBirth" placeholder="생년월일 6자리를 입력해주세요 ex) 991231" maxLength={6} ref={el => (inputRef.current[4] = el)} getValue={setBirth} />

                <RadioBox size={isMd} title="성별" labelValue={["남자", "여자", "지정안함"]} value={["male", "female", "none"]} getValue={setGender} />
            </div>

            <div className="join-submit-container">
                <button className="green-btn __md" type="submit" onClick={() => {
                    props.page("/Join/Start1");
                }}>다루 시작하기</button>
            </div>
        </form >
    )

};

export default JoinStart;