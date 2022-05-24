import React from 'react';

const AuthButton = (props) => {
    return (
        <button className={props.size + "-join-btn"} onClick={() => {

        }}>{props.title}</button>
    );
};

AuthButton.defaultProps = {
    size: "md",
    title:"타이틀을 입력하세요"
}

export default AuthButton;