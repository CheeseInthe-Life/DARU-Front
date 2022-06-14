import React from 'react';

const LongInput = React.forwardRef((props, ref) => {
    return (
        <div className={"long-input-container __" + props.size}>
            <label htmlFor="" className={"long-input-container __" + props.size + " __label"}>{props.title}</label>
            <input type={props.type} name={props.name} id={props.id} className={"long-input-container __" + props.size + " __text"} placeholder={props.placeholder} readOnly={props.readOnly} disabled={props.disabled} onChange={() => {
                return props.onChange()
            }} />
        </div>
    );
});


LongInput.defaultProps = {
    title: "",
    size: "lg",
    type: "text",
    placeholder: "placeholder를 입력하세요",
    readOnly: true,
    disable: false,
    name: "longInput",
    id: "longInput",
    onChange: function () {
        console.log("onChange 이벤트발생");
    }
}
export default LongInput;