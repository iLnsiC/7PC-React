import React from "react";

import Card from "../Card";

import "./FooterLeft.css";

function FooterLeft() {
  return (
    <Card className="Left__footer">
      <div className="logo"></div>
      <ul>
        <li>3 Avenue du President Wilson 75116 Paris</li>
        <li>Telephone : 07 70 50 87 08</li>
        <li>
          Visite individuelle (sans reservation) Du lundi au samedi de 8h30 a
          16h45
        </li>
        <li>GPS : 48.864872</li>
      </ul>
    </Card>
  );
}

export default FooterLeft;
