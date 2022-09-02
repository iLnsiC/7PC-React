import React from "react";

import OptionG from "./OptionG";
import Resaux from "./Resaux";

import "../Option.css";
import "./NavGauche.css";

function NavGauche() {
  return (
    <div className="option">
      <Resaux />
      <OptionG />
    </div>
  );
}

export default NavGauche;
