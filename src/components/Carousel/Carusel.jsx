import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSwipeable } from "react-swipeable";
import cl from "./Carousel.module.css";
import { slideNext, slidePrev } from "../../store/carouselSlice";
export const CarouselItem = ({ children, width }) => {
  return (
    <div className={cl.carouselItem} style={{ width: width }}>
      {children}
    </div>
  );
};
const Carusel = ({ children }) => {
  const newUpdate = useSelector((state) => state.carousell.value);
  const dispatch = useDispatch();
  const handlers = useSwipeable({
    onSwipedLeft: () => dispatch(slideNext()),
    onSwipedRight: () => dispatch(slidePrev()),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });
  return (
    <div {...handlers} className={cl.carousel}>
      <div
        className={cl.inner}
        style={{ transform: `translateX(-${newUpdate * 100}%)` }}
      >
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child, { width: "100vw" })
        )}
      </div>
    </div>
  );
};

export default Carusel;
