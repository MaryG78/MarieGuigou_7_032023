import React, { useState } from "react";
import styles from "../styles/collapse.module.css";

import arrow from "../assets/arrow.png";

const Collapse = (props) => {
  const [open, setOpen] = useState(false);
  const textOpened = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={styles.collapse__header}>
        <div className={styles.collapse__header__title}>{props.title}</div>
        <img
          onClick={textOpened}
          className={`arrow ${open ? styles.arrow_up : styles.arrow_down}`}
          src={arrow}
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
