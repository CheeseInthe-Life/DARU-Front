import React from 'react';


// checkbox 컴포넌트
const CheckBox = (props) => {
    return (
        <div className="lg-box-checkbox">
            <input type="checkbox" name="" id={props.id} className="lg-checkbox" checked={props.checked} onChange={(e) => {
                // check값의 change event가 발생될때 바뀐다..
                return props.setChangeValue(!props.checked);
            }} />
            <label htmlFor={props.id} className="lg-label">{props.title}</label>
        </div>
    );
};

CheckBox.defaultProps = {
    title: "타이틀을 입력하세요",
    checked: false,
    id: "checkbox",
    setChangeValue() {
        return console.log("change할 value를 넣어주세요")
    },
}

export default CheckBox;