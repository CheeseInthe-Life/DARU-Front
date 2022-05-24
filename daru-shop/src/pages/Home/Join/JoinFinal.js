import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const MainLink = styled(Link)`
    display:flex;
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
    margin: 0 auto;
    margin-bottom: 55px;
`
const JoinFinal = () => {
    return (
        <div className="join-container">
            <div className="join-inner-container">
                <article className="find-article">
                    <div className="join-final-img">

                    </div>
                    <span className="find-input-container-text">정보설정이 완료되었습니다.</span>
                    <span className="find-input-container-text">
                        감사합니다.
                    </span>
                </article>
                <MainLink to="/">
                    메인으로 돌아가기
                </MainLink>
            </div>
        </div>
    );
};

export default JoinFinal;