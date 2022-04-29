import { useEffect, useState } from "react";
import "./App.css";
import Carusel, { CarouselItem } from "./components/Carousel/Carusel";
import FirstSlide from "./components/firstSlide/FirstSlide";

function App() {
 

  return (
    <div className="App">
      <Carusel>
        <CarouselItem><FirstSlide/></CarouselItem>
        <CarouselItem><FirstSlide/></CarouselItem>
        <CarouselItem><FirstSlide/></CarouselItem>
      </Carusel>
    </div>
  );
}

export default App;
