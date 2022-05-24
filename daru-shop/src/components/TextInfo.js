import React from 'react';

// 경고문 표시
const TextInfo = (props) => {
    return (
        <span className="text-info" style={{ fontSize: props.fontSize }}> &#8251; {props.text}</span>
    );
};

TextInfo.defaultProps = {
    text: "안내할 내용을 입력하세요",
    fontSize: "16px"
}

export default TextInfo;