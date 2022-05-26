import React, { useState } from 'react';

import Input from '../../../../components/Input';
import TextInfo from '../../../../components/TextInfo';
import TextInfo2 from '../../../../components/TextInfo2';
import Title from '../../Title';



const ResetPassword = (props) => {
    const [isReset, setIsReset] = useState(false);
    const [pw, setPw] = useState(null);
    const [pwReCheck, setPwReCheck] = useState(null);

    function changeTitle() {
        return props.title("비밀번호 재설정")
    }
    changeTitle();

    return (
        <React.Fragment>
            <Input title="비밀번호" id="userPw" type="password" placeholder="비밀번호를 입력하세요" getValue={setPw} pattern="[0-9]+" maxLength={50} />
            <Input title="비밀번호 확인" id="userPwRe" type="password" placeholder="비밀번호를 한번 더 입력하세요" getValue={setPwReCheck} pattern="[0-9]+" maxLength={50} />

            <TextInfo text="비밀번호가 일치하지 않습니다"></TextInfo>
            <article>
                <TextInfo2 size={"sm"} title={["패스워드 형식", "특수문자 33자"]} description={["특수문자, 숫자, 영어 하나 이상 포함, 8~20개 사이의 문자열", "! \" # $ % & ` ( ) * + , - . / : ; < = > ? @ [ ＼ ] ^ _ ` { | } ~ \)"]} />
            </article>
            <button className="green-btn __md __find" onClick={(e) => {

                props.page("/Findpw/Final")
            }}>다음</button>
        </React.Fragment>
    );
};

export default ResetPassword;