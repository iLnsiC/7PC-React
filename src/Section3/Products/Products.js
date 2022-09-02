import React from "react";

import Product from "./Product";
import "./Products.css";

function Products() {
  return (
    <ul className="products">
      <Product />
      <Product />
      <Product />
      <Product />
    </ul>
  );
}
export default Products;
