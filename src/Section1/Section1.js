import React from "react";

import MainPhoto from "./MainPhoto";
import MainPhoto2 from "./MainPhoto2";
import MainArticle from "./MainArticle";

import "./Section1.css";

function Section1() {
  return (
    <div className="Section_1">
      <MainPhoto />
      <MainPhoto2 />
      <MainArticle />
    </div>
  );
}
export default Section1;
