import React, {useState} from 'react';

import "../../asset/scss/home.scss";

// 제목 표시 박스

const Title = ({title}) => {
    return (
        <div className="home-inner-container-title-box">
            <h1>{title}</h1>
        </div>
    );
};

export default Title;