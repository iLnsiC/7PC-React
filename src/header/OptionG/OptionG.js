import React from "react";

import "../Option.css";
import "./OptionG.css";
function OptionG() {
  return (
    <ul className="option option-gauche">
      <li className="drag">
        <a href="#">Confiserie</a>
        <ul>
          <li>
            <a href="#">Bonbons</a>
          </li>
          <li>
            <a href="#">Sucettes</a>
          </li>
          <li>
            <a href="#">Caramels</a>
          </li>
          <li>
            <a href="#">Nougats</a>
          </li>
        </ul>
      </li>

      <li className="middle">
        <a href="#" className="Ctext">
          Evenements
        </a>
      </li>
      <li>
        <a href="#" className="Ctext">
          Custom
        </a>
      </li>
    </ul>
  );
}

export default OptionG;
