import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
// custom-hooks
import { useResize } from '../../../asset/js/useResize';



// styled-components
const MainLink = styled(Link)`
    display:flex;
    align-items: center;
    justify-content: center;
    width:${props => props.width || "380px"};
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
    // resize custom hook
    const isMd = useResize();

    return (
        <div className="join-container">
            <div className="join-inner-container">
                <article className="find-article">
                    <div className="join-final-img">
                    </div>

                    <span className="find-input-container-text">정보 설정이 완료되었습니다.</span>
                    <span className="find-input-container-text">매장 심사 결과가 나오기까지</span>
                    <span className="find-input-container-text">최대 2일정도 소요됩니다.</span>
                    <span className="find-input-container-text" style={{ marginBottom: "40px" }}>
                        감사합니다.
                    </span>
                    <MainLink to="/" width={isMd == "sm" ? "320px" : undefined}>
                        메인으로 돌아가기
                    </MainLink>
                </article>

            </div>
        </div>
    );
};

export default JoinFinal;