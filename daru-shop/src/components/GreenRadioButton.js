import React from "react";
import PropTypes from "prop-types";

function GreenRadioButton(props) {
  return (
    <div style={{ width: props.width }}>
      <div className={`${props.size}-green-radio-btn`}>
        {/* name속성 같게 */}

        {props.title.map((v, i) => (
          <React.Fragment key={i}>
            <input
              type="radio"
              name={props.name}
              id={props.id + i}
              value={props.value[i]}
              onChange={(e) => {
                props.getValue(props.value[i]);
                // return props.value[i];
              }}
            />
            <label htmlFor={props.id + i}>{v}</label>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

GreenRadioButton.defaultProps = {
  size: "md",
  title: ["타이틀"],
  name: "select",
  id: "selectId",
  value: ["1"],
  width: "100%",
  getValue() {
    return console.log("getValue");
  },
};

GreenRadioButton.propTypes = {
  width: PropTypes.string,
  size: PropTypes.string,
  title: PropTypes.array,
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.array,
  getValue: PropTypes.func,
};

export default GreenRadioButton;
