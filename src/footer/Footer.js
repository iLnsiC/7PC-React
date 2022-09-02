import React from "react";

import FooterLeft from "./FooterLeft/FooterLeft";
import FooterRight from "./FooterRight/FooterRight";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <FooterLeft />
      <FooterRight />
    </div>
  );
}

export default Footer;
