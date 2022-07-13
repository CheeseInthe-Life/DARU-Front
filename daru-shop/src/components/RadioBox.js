import React from "react";
import PropTypes from "prop-types";

// RadioBox components입니다.
function RadioBox(props) {
  return (
    <div className={`${props.size}-radio-checkbox`}>
      <span className={`${props.size}-radio-label`}>{props.title}</span>
      <div className={`${props.size}-radio-input-box`}>
        {props.labelValue.map((v, i) => (
          <span className={`${props.size}-radio-input-box`} key={i}>
            <input
              type="radio"
              name={props.name}
              id={props.id + i}
              className={`${props.size}-radiobox`}
              value={props.value[i]}
              onClick={(e) => {
                console.log(e.currentTarget);
                console.log(e.currentTarget.value);
                return props.getValue(e.currentTarget.value);
              }}
            />
            <label htmlFor={props.id} className={`${props.size}-label`}>{v}</label>
          </span>
        ))}
      </div>
    </div>
  );
}

RadioBox.defaultProps = {
  size: "lg",
  id: "selected",
  title: "타이틀을 입력하세요",
  labelValue: [""],
  value: ["value를 입력"],
  name: "seleted",
  getValue() {
    console.log("getValue함수를 입력해주세요.");
  },
};

RadioBox.propTypes = {
  size: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
  labelValue: PropTypes.array,
  value: PropTypes.array,
  name: PropTypes.string,
  getValue: PropTypes.func,
};


export default RadioBox;
