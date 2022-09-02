import React, { useState } from "react";

import Bonbons from "./Bonbons";
import BoutonCarousel from "./BoutonCarousel";
import "./Carousel.css";
let leftPosition = [];
let getPositionHandler = (positionArray) => {
  positionArray.forEach((e) => leftPosition.push(e));
  return leftPosition;
};
console.log(leftPosition);
function Carousel() {
  // je recoit le vecteur de postion de bonbons
  // const [positionLeft, setpositionLeft] = useState();
  // je les change

  // je les renvoie dans bonbons

  return (
    <div id="carousel" className="carousel">
      <BoutonCarousel
        sens="prev"
        className="flech-G"
        onGetPosition={getPositionHandler}
      >
        G
      </BoutonCarousel>
      <Bonbons onRecuperation={getPositionHandler} />
      <BoutonCarousel
        sens="next"
        className="flech-D"
        onGetPosition={getPositionHandler}
      >
        D
      </BoutonCarousel>
      <a className="acheter" href="#">
        Acheter
      </a>
    </div>
  );
}
export default Carousel;
