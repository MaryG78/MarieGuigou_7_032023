import React, { useState } from "react";
import styles from "../styles/section.module.css";

const Sections = (props) => {
const [isTextVisible,setIsTextVisible] = useState(false);
const textVisible = () => {
  setIsTextVisible(!isTextVisible);
}

  return (
    <section className={styles.section}>
      <div className={styles.section__header}>
        <h1>{props.title}</h1>
        <i className="fas fa-chevron-down" onClick={textVisible}></i>
      </div>
      {isTextVisible && <p className={styles.section__content}>
        {props.content}
      </p>}
    </section>
  );
};

export default Sections;
