import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cl from "./FirstSlide.module.css";
import { slideNext } from "../../store/carouselSlice";

const FirstSlide = () => {
  const dispatch = useDispatch();

  return (
    <div className={cl.wrapper}>
      <p>Привет, </p>
      <h1 className={cl.title}>Это не коммерческое задание</h1>
      <button onClick={() => dispatch(slideNext())}>888</button>
    </div>
  );
};

export default FirstSlide;
