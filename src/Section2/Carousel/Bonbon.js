import React, { useState } from "react";
import styles from "./Bonbon.module.css";

function Bonbon(props) {
  // const test = document.getElementById(props.bonbonProps.id).style.color;
  // console.log(test);
  return (
    <div
      id={props.id}
      className={`${styles.bonbon} ${styles[props.bonbonProps.id]}`}
    ></div>
  );
}
export default Bonbon;
