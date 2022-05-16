import React from 'react';




const TextArea = (props) => {
    return (
        <textarea value={props.value} name="" id="" className="lg-textarea" readOnly>
        </textarea>
    );
};

TextArea.defaultProps = {
    value: "value를 입력해주세용",
}

export default TextArea;