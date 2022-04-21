import React from "react";

import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";

const BackButton = () => {
  let navigate = useNavigate();

  return (
    <div>
      <FontAwesomeIcon
        icon={faArrowRotateLeft}
        style={{
          position: "absolute",
          left: 0,
          paddingLeft: "25px",
          paddingTop: "25px",
          fontSize: "30px",
        }}
        onClick={() => {
            navigate(-1);
        }}
      />
    </div>
  );
};

export default BackButton;
