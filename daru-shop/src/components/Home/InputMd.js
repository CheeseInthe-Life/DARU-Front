import React from 'react';

// 기본적 input-label타입 components ex) 아이디 입력
const InputMd = (props) => {
    return (
        <div>
            <label htmlFor={props.id} className="md-input-text-label">{props.title}</label>
            <input type={props.type} name="" id={props.id} className="md-input-text" placeholder={props.placeholder} maxLength={props.maxLength} onChange={(e) => {
                e.preventDefault();
                return props.getValue(e.currentTarget.value);
            }} pattern={props.pattern} required/>
        </div>
    );
};


InputMd.defaultProps = {
    title: "title을 입력하세요",
    type:"text",
    id: "label",
    placeholder: "placeholder를 입력하세요",
    pattern: "",
    maxLength: 100,
    getValue: function () {
        console.log("getValue() 넘겨주세요");
    }
}

export default InputMd;