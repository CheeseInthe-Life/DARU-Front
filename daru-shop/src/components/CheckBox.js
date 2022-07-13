import React from "react";
import PropTypes from "prop-types";

// checkbox 컴포넌트
function CheckBox(props) {
  return (
    <div className="md-box-checkbox" style={{ width: props.width, float: props.float }}>
      <input
        type="checkbox"
        name=""
        id={props.id}
        className="md-checkbox"
        checked={props.checked}
        onChange={() => {
          // check값의 change event가 발생될때 바뀐다..
          props.onChange();
          return props.setChangeValue(!props.checked);
        }}
      />
      <label style={{ fontSize: props.fontSize }} htmlFor={props.id} className="md-label">{props.title}</label>
    </div>
  );
}

CheckBox.defaultProps = {
  title: "타이틀을 입력하세요",
  checked: false,
  fontSize: "",
  id: "checkbox",
  float: "",
  width: "",
  setChangeValue() {
    return console.log("change할 value를 넣어주세요");
  },
  onChange() {
    return console.log("Change시 발생할 이벤트를 넣어주세요");
  },
};
// 기본 타입 정해주기
CheckBox.propTypes = {
  title: PropTypes.string,
  checked: PropTypes.bool,
  fontSize: PropTypes.string,
  id: PropTypes.string,
  float: PropTypes.string,
  width: PropTypes.string,
  setChangeValue: PropTypes.func,
  onChange: PropTypes.func,
};

export default CheckBox;
