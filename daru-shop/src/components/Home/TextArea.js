import React from 'react';

// 회원가입 약관 및 textarea
const TextArea = (props) => {
    return (
        <textarea value={props.value} name="" id="" className="md-textarea" readOnly>
        </textarea>
    );
};

TextArea.defaultProps = {
    value: "value를 입력해주세용",
}

export default TextArea;