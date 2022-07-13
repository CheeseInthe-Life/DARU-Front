import React from "react";
import PropTypes from "prop-types";

function TextInfo2(props) {
  return (
    <div className={`text-info2 __${props.size}`}>
      <div className="text-info2 __img" />
      <div className={`text-info2 __${props.size} __subtitle`}>
        {props.title.map((v, i) => (
          <React.Fragment key={i}>
            <strong>{v}</strong>
            {props.description[i].split("\n").map((line, j) => (
              <p key={j} className={`text-info2 __${props.size} __text __p`}>
                {line}
                <br />
              </p>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

TextInfo2.defaultProps = {
  size: "",
  title: ["타이틀을 입력하세요"],
  description: ["어쩌구저쩌구"],
};

TextInfo2.propTypes = {
  size: PropTypes.string,
  title: PropTypes.array,
  description: PropTypes.array,
};

export default TextInfo2;
