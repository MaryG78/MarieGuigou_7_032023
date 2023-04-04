import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/header.module.css";
import logoHeader from "../assets/logo-header.png";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__logo}>
          <img src={logoHeader} alt="Logo Kasa" />
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/about">A propos</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
