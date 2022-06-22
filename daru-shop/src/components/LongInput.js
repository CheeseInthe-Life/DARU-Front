import React from 'react';

const LongInput = React.forwardRef((props, ref) => {
    // console.log(props);
    return (
        <div className={"long-input-container __" + props.size}>
            <label htmlFor="" className={"long-input-container __" + props.size + " __label"}>{props.title}</label>
            <input type={props.type} name={props.name} id={props.id} className={"long-input-container __" + props.size + " __text"} placeholder={props.placeholder} readOnly={props.readOnly} disabled={props.disabled} onChange={(e) => {
                return props.onChange(e);
            }} defaultValue={props.defaultValue} />
        </div>
    );
});


LongInput.defaultProps = {
    title: "",
    size: "lg",
    type: "text",
    placeholder: "placeholder를 입력하세요",
    readOnly: false,
    disable: false,
    name: "longInput",
    id: "longInput",
    defaultValue: "",
    onChange: function () {
        console.log("onChange 이벤트발생");
    }
}
export default LongInput;