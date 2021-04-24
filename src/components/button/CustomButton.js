import React from "react";
import { Link } from "react-router-dom";
import styles from "./CustomButton.module.css";
const CustomButton = (props) => {
  return (
    <div className={styles.main}>
      <Link to={props.to}>{props.text}</Link>
    </div>
  );
};

export default CustomButton;
