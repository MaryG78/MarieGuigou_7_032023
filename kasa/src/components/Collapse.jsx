import React, { useState } from "react";
import styles from "../styles/collapse.module.css";

const Collapse = (props) => {
  const [open, setOpen] = useState(false);
  const textOpened= () => {setOpen(!open)};

  return (
    <section className={styles.collapse}>
      <div className={styles.collapse__header}>
        <h3>{props.title}</h3>
        <img
          onClick={textOpened}
          className={open ? "arrow arrow_up" : "arrow arrow_down"}
          src="arrow.png"
          alt="devoilement du contenu"
        />
      </div>
      {open && <p className={styles.collapse__content}>{props.content}</p>}
    </section>
  );
};

export default Collapse;
