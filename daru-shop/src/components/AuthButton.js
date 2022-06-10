import React from 'react';

const AuthButton = (props) => {

    const styles = props.style;

    return (
        <button className={props.size + "-join-btn"} style={{ marginLeft: styles.marginLeft, marginTop: styles.marginTop }} onClick={(e) => {
            e.preventDefault();
            return props.onClick();
        }}>{props.title}</button>
    );
};

AuthButton.defaultProps = {
    size: "md",
    title: "타이틀을 입력하세요",
    style: "",
    onClick: () => {
        console.log("onclick 이벤트를 입력하세요");
    }
}

export default AuthButton;