import React, { useState, useEffect } from 'react';

import styled from 'styled-components'

import Subtitle from '../../../components/Subtitle';
import TextArea from '../../../components/Home/TextArea';
import CheckBox from '../../../components/CheckBox';
import Input from '../../../components/Input';
import SelectTel from '../../../components/Home/SelectTel';
import AuthButton from '../../../components/AuthButton';
import TextInfo from '../../../components/TextInfo';
import RadioBox from '../../../components/RadioBox';

const JoinStart = (props) => {
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
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    useEffect(() => {
        if (windowSize.width < 821) {
            setIsMd("sm")
        } else {
            setIsMd("md")
        }
    }, [windowSize])

    return (
        <form className="join-container">
            <div className="join-input-container">
                <Subtitle size={isMd} title="기본정보 입력" />
                <Input sort={isMd} size={isMd} placeholdersize={isMd} title="이메일" id="userEmail" type="email" placeholder="가입에 사용하신 이메일을 입력하세요." pattern="[^ @]*@[^ @]*" />
                <div className="join-select-box">
                    <SelectTel size={isMd} title="휴대폰" />
                    <AuthButton size={isMd} title="휴대폰 인증" />
                </div>
                <Input sort={isMd} size={isMd} title="인증번호" placeholder="인증번호를 입력해주세요." type="password" />
                <TextInfo text="인증번호가 일치하지 않습니다."></TextInfo>
                <Input sort={isMd} size={isMd} title="비밀번호" placeholder="비밀번호를 입력해주세요." type="password" />
                <Input sort={isMd} size={isMd} title="비밀번호 재확인" placeholder="비밀번호를 재입력해주세요." />
                <TextInfo text="비밀번호가 일치하지 않습니다."></TextInfo>

                <Input sort={isMd} size={isMd} title="생년월일" placeholder="생년월일 6자리를 입력해주세요 ex) 991231" maxLength={6} />
                <RadioBox size={isMd} title="성별" value={["남자", "여자"]} />
            </div>

            <div className="join-submit-container">
                <button className="green-btn __md" type="submit" onClick={() => {
                    props.page("/Join/Start1")
                }}>다루 시작하기</button>
            </div>
        </form >
    )

};

export default JoinStart;