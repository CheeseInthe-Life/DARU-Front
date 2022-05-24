import React from 'react';

const GreenCheckBoxs = (props) => {
    return (
        <div className={props.size + "-green-checkbox"}>
            {props.title.map((v, i) => {
                return (
                    <React.Fragment key={i}>
                        <input type="checkbox" name="" id={props.id + " _" + i} onChange={(e) => {
                            // check값의 change event가 발생될때 바뀐다..
                            props.onChange();
                            // return props.setChangeValue(!props.checked); //checked={props.checked}
                        }} />
                        <label htmlFor={props.id + " _" + i}>{v}</label>
                    </React.Fragment>
                )
            })}
        </div>
    );
};


GreenCheckBoxs.defaultProps = {
    size: "sm",
    title: ["백차", "홍차", "백차", "홍차", "백차", "홍차", "백차", "홍차", "백차", "홍차", "백차", "홍차"],
    checked: false,
    id: "checkbox",
    name: "",
    setChangeValue() {
        return console.log("change할 value를 넣어주세요")
    },
    onChange() {
        return console.log("Change시 발생할 이벤트를 넣어주세요")
    }
}

export default GreenCheckBoxs;