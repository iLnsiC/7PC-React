import React from "react";
import "./BoutonCarousel.css";

function BoutonCarousel(props) {
  const classes = "flech " + props.className;

  return (
    <button value={props.sens} className={classes}>
      {props.children}
    </button>
  );
}

export default BoutonCarousel;
