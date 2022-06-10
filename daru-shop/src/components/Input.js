import React from 'react';

// 기본적 input-label타입 components ex) 아이디 입력
// 
const Input = React.forwardRef(({ ...props }, ref) => {
    // ref를 넣을 label, Input
    // let labels;
    // let Input;
    // // ref가 있다면, ~ 실행... 없으면 에러남...
    // if (ref) {
    //     const { label, inputId } = ref.current;
    //     labels = label;
    //     Input = inputId;
    // }


    return (
        <div className={"input-text-box __" + props.sort}>
            {/* 라벨 */}
            <label htmlFor={props.id} className={"input-text-box __label __" + props.size} onClick={() => {
                // console.log(labels);
            }}>{props.title}</label>
            <input type={props.type} name="" id={props.id} className={"input-text-box __text __" + props.size} ref={ref} placeholder={props.placeholder} maxLength={props.maxLength} onChange={(e) => {
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