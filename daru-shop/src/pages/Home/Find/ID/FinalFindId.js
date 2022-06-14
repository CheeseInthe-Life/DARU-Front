import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';



const MainLink = styled(Link)`
    display:flex;
    padding: 0;
    margin-bottom: 100px;
    align-items: center;
    justify-content: center;
    width:${props => props.width};
    height:48px;
    font-size: 20px;
    color:white;
    background-color:#4DAF9A;
    border: 1px solid $GRAY-6;
    border-radius: 2px;
    text-decoration: none;
    cursor: pointer;
`


const FinalFindId = () => {
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
    // 이메일을 휴대폰 문자로 발송
    return (
        <div>
            <article className="find-article" style={{ border: "none" }}>
                <span className="find-input-container-text">가입하신 이메일을</span>
                <span className="find-input-container-text">
                    휴대폰 문자로 발송하였습니다.
                </span>
            </article>
            <MainLink width={isMd === "md" ? "380px" : "320px"} to="/">
                메인으로 돌아가기
            </MainLink>
        </div>
    );
};

export default FinalFindId;