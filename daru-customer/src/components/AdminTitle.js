import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import "../asset/AdminTitle.scss";

const AdminTitle = (props) => {
  const [title, setTitle] = useState(props.title);

  return (
    <div className="admin-title">
      <FontAwesomeIcon
        icon={faCheckCircle}
        style={{ display: "block", float: "left", marginRight:"10px"}}
        onClick={() => {}}  
      />
      <h1>{title}</h1>
    </div>
  );
};
AdminTitle.defaultProps = {
  title: "타이틀입니다.",
};

export default AdminTitle;
