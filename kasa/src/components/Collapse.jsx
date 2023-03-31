import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import collapseAboutStyles from "../styles/collapseAbout.module.css";
import collapseAccomodationStyles from "../styles/collapseAccomodation.module.css";

const Collapse = (props) => {
  const [open, setOpen] = useState(false);
  const textOpened = () => {
    setOpen(!open);
  };

  const location=useLocation();
  const styles =
    location.pathname === "/about"
      ? collapseAboutStyles
      : collapseAccomodationStyles;

  return (
    <>
      <div className={styles.collapse__header}>
        <h3>{props.title}</h3>
        <img
          onClick={textOpened}
          className={`arrow ${open ? styles.arrow_up : styles.arrow_down}`}
          src="arrow.png"
          alt="devoilement du contenu"
        />
      </div>
      {open && (
        <div className={styles.collapse__content}>
          <p className={styles.collapse__text}>{props.content}</p>
        </div>
      )}
    </>
  );
};

export default Collapse;
