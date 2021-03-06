import React from "react";
import BasicButton from "../basicButton/BasicButton";
import cl from "./Slide3.module.css";
import bottle from "../../assets/img/3slide/bottle.png";
import plate from "../../assets/img/3slide/icon1.png";
import calendar from "../../assets/img/3slide/icon2.png";
import Navbar from "../navbar/Navbar";

const Slide3 = () => {
  return (
    <div className={cl.wrapper}>
        <div className={cl.content}>
        <Navbar/>
        <p>Ключевое сообщение</p>
      <h2>Brand XY</h2>

    <div className={cl.textItems}>
    <div className={cl.textBlock1}>
        <div className={cl.text}>
          <p>
            Lorem ipsum debitis nisi placeat sapiente aliquid repellendus fuga.
            Est veniam, fuga, accus{" "}
          </p>
          <img className={cl.textBlockImg} src={plate}></img>
        </div>
      </div>
      <div className={cl.rightBlock}>
      <div className={cl.textBlock2}>
        <div className={cl.text}>
          <p>
            Lorem ipsum debitis  fuga.
           
          </p>
          <img className={cl.textBlockImg} src={calendar}></img>
        </div>
      </div>
      <BasicButton styles={cl.buttonNext}>Подробнее</BasicButton>
      </div>
      
    </div>
      

      
      <img className={cl.bottleImg} src={bottle}></img>

      
      </div>
    </div>
  );
};

export default Slide3;
