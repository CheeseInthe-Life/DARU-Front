import React from 'react';


// checkbox 컴포넌트
const CheckBox = (props) => {
    return (
        <div className="md-box-checkbox" style={{ width: props.width, float: props.float }}>
            <input type="checkbox" name="" id={props.id} className="md-checkbox" checked={props.checked} onChange={(e) => {
                // check값의 change event가 발생될때 바뀐다..
                props.onChange();
                return props.setChangeValue(!props.checked);
            }} />
            <label htmlFor={props.id} className="md-label">{props.title}</label>
        </div>
    );
};

CheckBox.defaultProps = {
    title: "타이틀을 입력하세요",
    checked: false,
    id: "checkbox",
    float: "",
    width: "",
    setChangeValue() {
        return console.log("change할 value를 넣어주세요");
    },
    onChange() {
        return console.log("Change시 발생할 이벤트를 넣어주세요");
    }
}

export default CheckBox;