import React from "react";
import cl from "./FirstSlide.module.css";

const FirstSlide = () => {
  return (
    <div className={cl.wrapper}>
      <p>Привет,</p>
      <h1 className={cl.title}>Это не коммерческое задание</h1>
    </div>
  );
};

export default FirstSlide;
