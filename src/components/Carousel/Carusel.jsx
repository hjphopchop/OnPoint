import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import cl from "./Carousel.module.css";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className={cl.carouselItem} style={{ width: width }}>
      {children}
    </div>
  );
};

const Carusel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }

    setActiveIndex(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });
  return (
    <div {...handlers} className={cl.carousel}>
      <div
        className={cl.inner}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child, { width: "100vw" })
        )}
      </div>
    </div>
  );
};

export default Carusel;
