import React from "react";
import BasicButton from "../basicButton/BasicButton";
import cl from "./Slide3.module.css";
import bottle from "../../assets/img/3slide/bottle.png";
import plate from "../../assets/img/3slide/icon1.png";
import calendar from "../../assets/img/3slide/icon2.png";

const Slide3 = () => {
  return (
    <div className={cl.wrapper}>
      <h2>Brand XY</h2>

    <div className={cl.textItems}>
    <div className={cl.textBlock}>
        <div className={cl.text}>
          <p className={cl.text}>
            Lorem ipsum debitis nisi placeat sapiente aliquid repellendus fuga.
            Est veniam, fuga, accus{" "}
          </p>
          <img className={cl.textBlockImg} src={plate}></img>
        </div>
      </div>

      <div className={cl.textBlock}>
        <div className={cl.text}>
          <p className={cl.text}>
            Lorem ipsum debitis nisi placeat sapiente aliquid repellendus fuga.
            Est veniam, fuga, accus{" "}
          </p>
          <img className={cl.textBlockImg} src={calendar}></img>
        </div>
      </div>
    </div>
      

      
      <img className={cl.bottleImg} src={bottle}></img>

      <BasicButton>Подробнее</BasicButton>
    </div>
  );
};

export default Slide3;
