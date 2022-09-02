import React from "react";

import SecondaryArticle from "./SecondaryArticle";
import Carousel from "./Carousel/Carousel";
import SecondaryPhoto from "./SecondaryPhoto";
import "./Section2.css";

function Section2() {
  return (
    <div className="Section_2">
      <SecondaryArticle />
      <Carousel />
      <SecondaryPhoto />
    </div>
  );
}

export default Section2;
