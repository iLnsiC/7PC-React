import React from "react";

import NavGauche from "./OptionG/NavGauche";
import NavLogo from "./Logo/NavLogo";
import NavDroit from "./OptionD/NavDroit";

import "./Header.css";

function Header() {
  return (
    <div className="Header__Container">
      <NavGauche />
      <NavLogo />
      <NavDroit />
    </div>
  );
}
export default Header;
