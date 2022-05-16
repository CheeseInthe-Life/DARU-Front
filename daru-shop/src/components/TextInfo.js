import React from 'react';

const TextInfo = (props) => {
    return (
        <span className="text-info"> &#8251; {props.text}</span>
    );
};

TextInfo.defaultProps = {
    text: "안내할 내용을 입력하세요",
}

export default TextInfo;