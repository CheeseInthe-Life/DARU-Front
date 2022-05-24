import React from 'react';

// 기본적 input-label타입 components ex) 아이디 입력
// 
const Input = React.forwardRef(({ ...props }, ref) => {
    // console.log(props.page);
    return (
        <div className={"input-text-box __" + props.sort}>
            {/* 라벨 */}
            <label htmlFor={props.id} className={"input-text-box __label __" + props.size} >{props.title}</label>
            <input type={props.type} name="" id={props.id} className={"input-text-box __text __" + props.size} placeholder={props.placeholder} ref={ref} maxLength={props.maxLength} onChange={(e) => {
                e.preventDefault();


                // input의 value를 얻을 수 있다.
                return props.getValue(e.currentTarget.value.trim());
                // 맨 마지막에 required 속성 넣어줘야한다.
            }} pattern={props.pattern} required={props.required} />
        </div>
    );
});


Input.defaultProps = {
    sort: "",
    size: "md",
    title: "title을 입력하세요",
    type: "text",
    id: "label",
    placeholder: "placeholder를 입력하세요",
    pattern: "",
    maxLength: 100,
    required: false,
    getValue: function () {
        console.log("getValue() 넘겨주세요");
    }
}

export default Input;