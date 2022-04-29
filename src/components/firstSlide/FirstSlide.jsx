import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cl from "./FirstSlide.module.css";
import { slideNext } from "../../store/carouselSlice";
import BasicButton from "../basicButton/BasicButton";

const FirstSlide = () => {
  const dispatch = useDispatch();

  const onSlideNext = () => {
    dispatch(slideNext())
  }

  return (
    <div className={cl.wrapper}>
      <p className={cl.text}>Привет, </p>
      <h1 className={cl.title}>Это не коммерческое задание</h1>
      <BasicButton buttonClick ={onSlideNext}>Что дальше?</BasicButton>
    </div>
  );
};

export default FirstSlide;
