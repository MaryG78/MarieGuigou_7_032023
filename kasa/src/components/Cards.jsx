import React from "react";
import styles from "../styles/cards.module.css";
import { Link } from "react-router-dom";

const Cards = (props) => {
  return (
    <figure className={styles.card}>
      <img src={props.imageUrl} />
      <Link
        to="/accomodation"
        state={{
          accomodationId: props.accomodationId,
        }}
      >
      <figcaption>{props.title}</figcaption>
      </Link>
    </figure>
  );
};

export default Cards;
