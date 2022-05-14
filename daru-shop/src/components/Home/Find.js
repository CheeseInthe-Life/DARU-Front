import React, { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import styled from "styled-components";

import "../../asset/scss/pages/find.scss";

import Timer from '../Timer';

//메인으로 돌아가기 Link CSS 
const MainLink = styled(Link)`
    display:flex;
    padding: 0;
    margin-bottom: 100px;
    align-items: center;
    justify-content: center;
    width:380px;
    height:48px;
    font-size: 20px;
    color:white;
    background-color:#4DAF9A;
    border: 1px solid $GRAY-6;
    border-radius: 2px;
    text-decoration: none;
    cursor: pointer;
`

const Find = ({ title }) => {
    const location = useLocation().pathname;

    // 인증이 끝나면 비밀번호 재설정
    const [isReset, setIsReset] = useState(false);

    return (
        <form className="find-input-container">
            {/* id */}
            <label htmlFor="label3" className="md-input-text-label">아이디찾기</label>
            <div className="find-input-box">
                <select name="select" id="select" className="lg-dropdown __find-id" >
                    <option value="010">010</option>
                    <option value="011">011</option>
                </select>
                <input type="text" name="" id="label3" className="md-input-text __find-id" pattern="[0-9]+" maxLength="4"  required/>
                <input type="text" name="" id="label3" className="md-input-text __find-id" pattern="[0-9]+" maxLength="4" required/>
            </div>
            <button className="lg-green-btn __find" type="submit">인증번호 보내기</button>


            <label htmlFor="label3" className="md-input-text-label">인증번호</label>
            <input type="text" name="" id="label3" className="md-input-text" pattern="[0-9]+" maxLength="6" placeholder="인증번호를 입력하세요" required/>
            <span className="find-input-container-text"> 유효시간 :  {<Timer mm="3" ss="0" />} </span>
            <button className="lg-green-btn" type="submit">인증하기</button>
            <button className="lg-btn __find">다음</button>
            <button className="lg-btn __gray __find">휴대폰 인증이 필요합니다</button>

            <article className="find-article">
                <span className="find-input-container-text">가입하신 이메일을</span>
                <span className="find-input-container-text">
                    휴대폰 문자로 발송하였습니다.
                </span>
            </article>
            <MainLink to="/">
                메인으로 돌아가기
            </MainLink>

            {/* pw */}
            <label htmlFor="label1" className="md-input-text-label">이메일</label>
            <input type="text" name="" id="label1" className="md-input-text" pattern="[^ @]*@[^ @]*" maxLength="50" placeholder="가입에 사용하신 이메일을 입력하세요" required />
            <button className="lg-green-btn __find" type="submit">인증번호 보내기</button>

            <label htmlFor="label3" className="md-input-text-label">인증번호</label>
            <input type="text" name="" id="label3" className="md-input-text" pattern="[0-9]+" maxLength="6" placeholder="인증번호를 입력하세요" required />
            <span className="find-input-container-text"> 유효시간 :  {<Timer mm="3" ss="0" />} </span>
            <button className="lg-green-btn" type="submit">인증하기</button>
            <button className="lg-btn __find">다음</button>
            <button className="lg-btn __gray __find">이메일 인증이 필요합니다</button>

            {/* pw reset */}
            {isReset && title("비밀번호 재설정")}
            <label htmlFor="label1" className="md-input-text-label">비밀번호</label>
            <input type="password" name="" id="label1" className="md-input-text" pattern="[^ @]*@[^ @]*" maxLength="50" placeholder="비밀번호를 입력하세요" required />

            <label htmlFor="label1" className="md-input-text-label">비밀번호 확인</label>
            <input type="password" name="" id="label1" className="md-input-text" pattern="[^ @]*@[^ @]*" maxLength="50" placeholder="비밀번호를 한번 더 입력하세요" required />

            <span class="text-info"> &#8251; 비밀번호가 일치하지 않습니다.</span>
            <article>
                <div class="find-box-reset-info">
                    <div>

                    </div>
                    <div>
                        <strong>패스워드 형식</strong>
                    <p>특수문자, 숫자, 영어 하나 이상 포함, 8~20개 사이의 문자열</p>
                    <strong>특수문자 33자</strong>
                    <p>	&#33; &#34; &#35; &#36; &#37; &#38; &#39; &#40; &#41; &#42; &#43; &#44; &#45; &#46; &#47; &#58; &#59; &#60; &#61; &#62; &#63; &#64; &#91; &#92; &#93; &#94; &#95; &#96; &#123; &#124; &#125; &#126;
                    </p>
                    </div>
                </div>
            </article>
            <button className="lg-btn __find">다음</button>

            <article className="find-article">
                <span className="find-input-container-text">비밀번호를 성공적으로</span>
                <span className="find-input-container-text">
                    새로 설정하였습니다.
                </span>
            </article>
            <MainLink to="/">
                메인으로 돌아가기
            </MainLink>
        </form>
    );
};

export default Find;