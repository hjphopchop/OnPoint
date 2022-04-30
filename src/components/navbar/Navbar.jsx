import React from "react";
import { useDispatch } from "react-redux";
import { slideHome } from "../../store/carouselSlice";
import cl from "./Navbar.module.css";
import logo from "../../assets/img/global/global.png";

const Navbar = () => {
  const dispatch = useDispatch();

  const onHome = () => {
    dispatch(slideHome());
  };
  return (
    <button className={cl.buttonHome} onClick={onHome}>
      <img src={logo}></img>
    </button>
  );
};

export default Navbar;
