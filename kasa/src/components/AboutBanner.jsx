import React from 'react';
import styles from "../styles/banner.module.css";

const AboutBanner = () => {
    return (
        <div className={styles.banner}>
          <img src="about-banner.png" alt="Paysage qui montre une rivière qui coule aux pieds de montagnes." />
        </div>
    );
};

export default AboutBanner;