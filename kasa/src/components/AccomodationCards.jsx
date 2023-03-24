import React from "react";
import styles from "../styles/accomodationCards.module.css";



const AccomodationCards = (props) => {
  return (
    <figure className={styles.card}>
      <img src={props.imageUrl} />
      <figcaption>{props.title}</figcaption>
    </figure>
  );
};

export default AccomodationCards;