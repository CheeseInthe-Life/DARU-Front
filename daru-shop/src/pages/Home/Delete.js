import React, { useState, useEffect, useRef } from 'react';

import Input from '../../components/Input';
import TextInfo from '../../components/TextInfo';
import CheckBox from '../../components/CheckBox';
const Delete = (props) => {

    const [isSamePw, setIsSamePw] = useState(false);
    const [pw, setPw] = useState("");
    const [pwReCheck, setPwReCheck] = useState("");
    const [isCheck, setIsCheck] = useState(false);

    const inputPw = useRef();
    const inputRePw = useRef();


    console.log(isSamePw);
    useEffect(() => {
        // 인풋 데이터가 없을 경우
        if (pwReCheck.length == 0) {
            return setIsSamePw(true)
        } else if (pwReCheck !== pw) {
            return setIsSamePw(false);
        } else if (pwReCheck === pw) {
            return setIsSamePw(true);
        }
    }, [pwReCheck])

    return (
        <React.Fragment>
            <Input title="비밀번호" id="userPw" type="password" placeholder="비밀번호를 입력하세요" getValue={setPw} pattern="" maxLength={50} ref={inputPw} />
            <Input title="비밀번호 확인" id="userPwRe" type="password" placeholder="비밀번호를 한번 더 입력하세요" getValue={setPwReCheck} pattern="" maxLength={50} ref={inputRePw} />
            {!isSamePw && <span className="text-info" style={{ margin: "0 auto", marginBottom: "10px", width: "378px" }}> &#8251; 비밀번호가 일치하지 않습니다.</span>}

            <CheckBox title="매장과 관련된 모든 데이터를
 삭제하시겠습니까?" setChangeValue={setIsCheck} checked={isCheck} width="380px"></CheckBox>


            {isCheck && <button className="white-btn" onClick={e => alert("삭제가 완료되었습니다.")}>삭제</button>}

        </React.Fragment>
    );
};

export default Delete;