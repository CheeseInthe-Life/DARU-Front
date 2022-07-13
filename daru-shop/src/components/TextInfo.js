import React from "react";
import PropTypes from "prop-types";

// 경고문 표시
function TextInfo(props) {
  return (
    <span className="text-info" style={{ fontSize: props.fontSize }}>
      {" "}
      &#8251;
      {props.text}
    </span>
  );
}

TextInfo.defaultProps = {
  text: "안내할 내용을 입력하세요",
  fontSize: "16px",
};
TextInfo.propTypes = {
  text: PropTypes.string,
  fontSize: PropTypes.string
};

export default TextInfo;
