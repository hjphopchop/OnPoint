import React from "react";
import cl from "./BasicButton.module.css";

const BasicButton = ({ children, buttonClick, styles }) => {
  return (
    <button onClick={() => buttonClick()} className={styles}>
      {children}
    </button>
  );
};

export default BasicButton;
