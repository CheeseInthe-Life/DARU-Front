import React from 'react';

// 회원가입 약관 및 textarea
const TextArea = (props) => {
    return (
        <textarea value={props.value} name="" id="" className={`textarea __${props.size} __${props.page}`} readOnly={props.readOnly}>
        </textarea>
    );
};

TextArea.defaultProps = {
    value: undefined,
    name: "",
    id: "",
    readOnly: true,
    size: "md",
    page: "info",
}

export default TextArea;