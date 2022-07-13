import React from "react";
import PropTypes from "prop-types";
// 회원가입 약관 및 textarea
function TextArea(props) {
  return (
    <textarea

      name=""
      id=""
      className={`textarea __${props.size} __${props.page}`}
      readOnly={props.readOnly}
      defaultValue={props.defaultValue}
      onChange={(e) => {
        e.preventDefault();
        props.onChange(e);
      }}
    />
  );
}

TextArea.defaultProps = {
  name: "",
  id: "",
  readOnly: true,
  defaultValue: "",
  size: "md",
  page: "info",
  onChange(e) {
    console.log("onChange함수 실행");
  },
};

TextArea.propTypes = {
  name: PropTypes.string,
  size: PropTypes.string,
  page: PropTypes.string,
  readOnly: PropTypes.bool,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextArea;
