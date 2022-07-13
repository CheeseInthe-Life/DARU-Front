import React from "react";
import PropTypes from "prop-types";

function AuthButton({
  size, title, style, onClick,
}) {
  const styles = style;
  return (
    <button
      className={`${size}-join-btn`}
      style={{ marginLeft: styles.marginLeft, marginTop: styles.marginTop }}
      onClick={(e) => {
        e.preventDefault();
        return onClick();
      }}
    >
      {title}
    </button>
  );
}

AuthButton.defaultProps = {
  size: "md",
  title: "타이틀을 입력하세요",
  style: "",
  onClick: () => {
    console.log("onclick 이벤트를 입력하세요");
  },
};
AuthButton.propTypes = {
  size: PropTypes.string,
  title: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};
export default AuthButton;
