import React from "react";
import PropTypes from "prop-types";

const LongInput = React.forwardRef((props, ref) =>
// console.log(props);
(
  <div className={`long-input-container __${props.size}`}>
    <label htmlFor="" className={`long-input-container __${props.size} __label`}>{props.title}</label>
    <input
      type={props.type}
      name={props.name}
      id={props.id}
      className={`long-input-container __${props.size} __text`}
      placeholder={props.placeholder}
      readOnly={props.readOnly}
      disabled={props.disabled}
      onChange={(e) => props.onChange(e)}
      defaultValue={props.defaultValue}
    />
  </div>
));

LongInput.defaultProps = {
  title: "",
  size: "lg",
  type: "text",
  placeholder: "placeholder를 입력하세요",
  readOnly: false,
  disabled: false,
  name: "longInput",
  id: "longInput",
  defaultValue: "",
  onChange() {
    console.log("onChange 이벤트발생");
  },
};

LongInput.propTypes = {
  title: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
};

LongInput.displayName = "LongInput";

export default LongInput;
