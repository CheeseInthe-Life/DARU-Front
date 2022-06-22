import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

// custom-hooks
import { useResize } from "../../../../asset/js/useResize";


// styled
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
    // custom-hooks
    const isMd = useResize();


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