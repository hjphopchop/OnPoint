import React from "react";
import "./App.css";
import Carusel, { CarouselItem } from "./components/Carousel/Carusel";
import FirstSlide from "./components/firstSlide/FirstSlide";
import SecondSlide from "./components/secondSlide/SecondSlide";
import Slide3 from "./components/slide3/Slide3";

function App() {
  return (
    <div className="App">
      <Carusel>
        <CarouselItem><FirstSlide/> </CarouselItem>
        <CarouselItem><SecondSlide/></CarouselItem>
        <CarouselItem><Slide3/></CarouselItem>
      </Carusel>
    </div>
  );
}

export default App;
