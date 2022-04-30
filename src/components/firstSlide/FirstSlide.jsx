import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cl from "./FirstSlide.module.css";
import { slideNext } from "../../store/carouselSlice";
import BasicButton from "../basicButton/BasicButton";
import Navbar from "../navbar/Navbar";
import bigBall from "../../assets/img/1slide/Layer4.png";
import pipe from "../../assets/img/1slide/Layer 7.png";
import bigMorgenshtern from "../../assets/img/1slide/Layer 8.png";
import bigSperm from "../../assets/img//1slide/pink_sperm_1.png";
import BallTop from "../../assets/img/1slide/Layer 5.png";
import staticBall1 from "../../assets/img/1slide/Layer 4 copy.png";
import staticBall2 from "../../assets/img/1slide/Layer 4 copy 2.png";
import smallSperm from "../../assets/img/1slide/pink_sperm.png";
import smallBall from "../../assets/img/1slide/bakti_1.png";
import battonArrow from "../../assets/img/1slide/battonArrow.png";

const FirstSlide = () => {
  const dispatch = useDispatch();

  const onSlideNext = () => {
    dispatch(slideNext());
  };

  return (
    <div className={cl.wrapper}>
      <div className={cl.content}>
        <Navbar />
        <p className={cl.text}>Привет, </p>

        <h1 className={cl.title}>
          Это не коммерческое задание
          <BasicButton styles={cl.buttonNext} buttonClick={onSlideNext}>
            <div className={cl.buttonItems}>
              <img src={battonArrow}></img>
              <span>Что дальше?</span>
            </div>
          </BasicButton>
        </h1>
      </div>
      <img className={cl.bigBall} src={bigBall}></img>
      <img className={cl.pipe} src={pipe}></img>
      <img className={cl.bigMorgenshtern} src={bigMorgenshtern}></img>
      <img className={cl.bigSperm} src={bigSperm}></img>
      <img className={cl.BallTop} src={BallTop}></img>
      <img className={cl.staticBall1} src={staticBall1}></img>
      <img className={cl.staticBall2} src={staticBall2}></img>
      <img className={cl.smallSperm} src={smallSperm}></img>
      <img className={cl.smallBall} src={smallBall}></img>
    </div>
  );
};

export default FirstSlide;
