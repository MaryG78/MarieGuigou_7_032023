import React, { useState } from "react";
import styles from "../styles/accomodationDescription.module.css";

const AccomodationDescription = (props) => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const textVisible = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <section className={styles.accomodationDescription}>
      <div className={styles.accomodationDescription__header}>
        <h1>{props.title}</h1>
        <i className="fas fa-chevron-down" onClick={textVisible}></i>
      </div>
      {isTextVisible && (
        <p className={styles.accomodationDescription__content}>
          {props.content}
        </p>
      )}
    </section>
  );
};

export default AccomodationDescription;
