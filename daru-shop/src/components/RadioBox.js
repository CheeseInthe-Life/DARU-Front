import React from 'react';

// RadioBox components입니다.
const RadioBox = (props) => {
    return (
        <div className={props.size + "-radio-checkbox"}>
            <span className={props.size + "-radio-label"}>{props.title}</span>
            <div className={props.size + "-radio-input-box"}>
                {props.value.map((v, i) => {
                    return (
                        <span className={props.size + "-radio-input-box"} key={i}>
                            <input type="radio" name={props.name} id={props.id + i} className={props.size + "-radiobox"} />
                            <label htmlFor={props.id} className={props.size + "-label"}>{v}</label>
                        </span>
                    )
                })}
            </div>
        </div >
    );
};

RadioBox.defaultProps = {
    size: "lg",
    id: "selected",
    title: "타이틀을 입력하세요",
    value: ["value를 입력"],
    name: "seleted"
}

export default RadioBox;