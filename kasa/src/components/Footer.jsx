import React from "react";
import styles from "../styles/footer.module.css";
import logoFooter from "../assets/logo-footer.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__logo}>
        <img src={logoFooter} alt="logo footer" />
      </div>
      <div className={styles.footer__text}>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
