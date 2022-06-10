import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

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

const FinalFindPw = (props) => {
    return (
        <React.Fragment>
            <article className="find-article">
                <span className="find-input-container-text">비밀번호를 성공적으로</span>
                <span className="find-input-container-text">
                    새로 설정하였습니다.
                </span>
            </article>
            <MainLink to="/">
                메인으로 돌아가기
            </MainLink>
        </React.Fragment>
    );
};


export default FinalFindPw;