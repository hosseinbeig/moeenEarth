import styles from "./flags.module.css";
import React from "react";
import images from "../../assets/images";

const CadFlag = ({ ...rest }) => (
  <div className={styles.wrapper} {...rest}>
    <img src={images.common.canadaFlag} alt="canada" className={styles.image} />
  </div>
);

export default CadFlag;
