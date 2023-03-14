import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
        <header className="header-container">
          <nav>
            <ul>
              <li>
                <Link to="/home">Accueil</Link>
              </li>
              <li>
                <Link to="/accomodation">Logements</Link>
              </li>
              <li>
                <Link to="/about">A propos</Link>
              </li>
              <li>
                <Link to="/error">Erreur 404</Link>
              </li>
            </ul>
          </nav>
        </header>
    </>
  );
};

export default Header;
