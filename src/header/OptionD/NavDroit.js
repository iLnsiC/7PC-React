import React from "react";

import SearchBar from "./SearchBar";
import OptionD from "./OptionD";

import "../Option.css";
import "./NavDroit.css";

function NavDroit() {
  return (
    <div className="option">
      <OptionD />
      <SearchBar />
    </div>
  );
}

export default NavDroit;
