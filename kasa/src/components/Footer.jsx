import React from 'react';
import styles from "../styles/footer.module.css"

const Footer = () => {
    return (
      <div className={styles.footer}>
        <div className={styles.footer__logo}>
          <img src="logo-footer.png" alt="logo footer" />
        </div>
        <div className={styles.footer__text}>
          <p>© 2020 Kasa. All rights reserved</p>
        </div>
      </div>
    );
};

export default Footer;