import styles from "./flags.module.css";
import React from "react";
import images from "../../assets/images";

const NigFlag = ({ ...rest }) => (
  <div className={styles.wrapper} {...rest}>
    <img
      src={images.common.nigeriaFlag}
      alt="canada"
      className={styles.image}
    />
  </div>
);
export default NigFlag;
