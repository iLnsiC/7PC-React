import React from "react";
import "../Option.css";
import "./SearchBar.css";
function SearchBar() {
  return (
    <div className="Search">
      <input type="search" className="Search_bar" placeholder="Rechercher" />
      <button>L</button>
    </div>
  );
}
export default SearchBar;
