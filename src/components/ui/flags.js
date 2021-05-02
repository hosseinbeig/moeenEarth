import React from 'react';
import styles from './flags.module.css';
import images from '../../Assets/images';

const IranFlag = ({ ...rest }) => (
  <div className={styles.wrapper} {...rest}>
    <img src={images.common.iranFlag} alt="canada" className={styles.irFlag} />
  </div>
);
export const EnglishFlag = ({ ...rest }) => (
  <div className={styles.wrapper} {...rest}>
    <img
      src={images.common.englishFlag}
      alt="canada"
      className={styles.enFlag}
    />
  </div>
);

export default IranFlag;
