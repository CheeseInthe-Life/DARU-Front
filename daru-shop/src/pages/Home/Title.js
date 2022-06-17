import React, { useState, useEffect } from 'react';

import "../../asset/scss/article.scss";

// 제목 표시 박스

const Title = ({ title }) => {
    // console.log(title);
    const [isJoin, setIsJoin] = useState("");
    // 제목이 회원 가입이면 inner-box CSS 추가
    useEffect(() => {
        switch (title) {
            case "회원 가입":
                setIsJoin(" __join");
                break;
            case "매장 등록":
                setIsJoin(" __join");
                break;
            default:
                setIsJoin("");
                break;
        }
    }, [title])
    return (
        <div className={"home-inner-container-title-box" + isJoin}>
            <h1>{title}</h1>
        </div>
    );
};

export default Title;