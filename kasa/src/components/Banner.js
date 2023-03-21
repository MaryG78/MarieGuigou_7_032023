import React from 'react';
import styles from "../styles/banner.module.css"

const Banner = () => {
    return (
      <div className={styles.banner}>
        <img src="banner.png" alt="banner" />
        <h1 className={styles.banner__text}>Chez vous, partout et ailleurs</h1>
      </div>
    );
};

export default Banner;