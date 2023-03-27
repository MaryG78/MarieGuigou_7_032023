import React from "react";
import { NavLink } from "react-router-dom";
import styles from"../styles/header.module.css"


const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__logo}>
          <img src="LOGO.png" alt="Logo Kasa" />
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" activeclassname="navLink--active">
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeclassname="navLink--active">
                A propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
