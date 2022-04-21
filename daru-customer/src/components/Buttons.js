import React, { useState } from "react";

import "../asset/Buttons.scss";

const Buttons = (props) => {
  const [color, setColor] = useState(props.color);
  const [trans, setTrans] = useState(props.trans);
  const [sentence, setSentence] = useState(props.sentence);
  const [urls, setUrls] = useState(props.urls);
  const [click, setClick] = useState(props.click);
  console.log(click);
  console.log(urls);

  return (
    <div>
      <button
        className={`btn-${color} ${trans}`}
        onClick={(e) => {
          e.preventDefault();
          console.log("누름");
          click === "submit"
            ? console.log("서버")
            : (window.location.href = `/${urls}`);
        }}
      >
        {sentence}
      </button>
    </div>
  );
};

Buttons.defaultProps = {
  color: "gray",
  trans: "black",
  sentence: "sentence",
  urls: "",
  click: "",
};

export default Buttons;
