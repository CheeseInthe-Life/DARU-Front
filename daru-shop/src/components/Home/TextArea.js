import React from 'react';

// 회원가입 약관 및 textarea
const TextArea = (props) => {
    return (
        <textarea value={props.value} name="" id="" className={`textarea __${props.size} __${props.page}`} readOnly={props.readOnly} defaultValue={props.defaultValue} onChange={(e) => {
            e.preventDefault();
            props.onChange(e);
        }}>
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
    onChange: function (e) {
        console.log("onChange함수 실행");
    }
}

export default TextArea;