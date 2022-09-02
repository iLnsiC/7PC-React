import React from "react";

// import Wrap from "./Wrap";

import "./Product.css";

function Product() {
  return (
    <li className="product">
      {/* <Wrap /> */}
      <a href="page1.html" className="photo photo-1"></a>
      <h2 className="name">Assortiment trois saveurs</h2>
      <h3 className="price">
        16,00$ <span className="barre"></span>
      </h3>
      <h3 className="price price-promo">11,50$</h3>
    </li>
  );
}
export default Product;
