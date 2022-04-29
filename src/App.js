import { useEffect, useState } from "react";
import "./App.css";
import Carusel, { CarouselItem } from "./components/Carousel/Carusel";
import FirstSlide from "./components/FirstSlide";

function App() {
 

  return (
    <div className="App">
      <Carusel>
        <CarouselItem><FirstSlide/></CarouselItem>
        <CarouselItem><div>2</div></CarouselItem>
        <CarouselItem><div>4fggfbgg</div></CarouselItem>
      </Carusel>
    </div>
  );
}

export default App;
