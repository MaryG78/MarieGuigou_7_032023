import React from 'react';
import styles from "../styles/aboutBanner.module.css";

const AboutBanner = () => {
    return (
        <div className={styles.aboutBanner}>
          <img src="about-banner.png" alt="Paysage qui montre une rivière qui coule aux pieds de montagnes." />
        </div>
    );
};

export default AboutBanner;