import React from 'react';

const GreenRadioButton = (props) => {
    return (
        <div style={{ width: props.width }}>
            <div className={props.size + "-green-radio-btn"}>
                {/* name속성 같게 */}

                {props.title.map((v, i) => {
                    return (
                        <React.Fragment key={i}>
                            <input type="radio" name={props.name} id={props.id + i} value={props.value[i]} />
                            <label htmlFor={props.id + i}>{v}</label>
                        </React.Fragment>
                    )
                })}
            </div>
        </div >
    );
};

GreenRadioButton.defaultProps = {
    size: "md",
    title: ["타이틀",],
    name: "select",
    id: "selectId",
    value: ["1"],
    width: "100%"
}


export default GreenRadioButton;