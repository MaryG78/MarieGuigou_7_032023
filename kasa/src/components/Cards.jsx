import React from "react";
import styles from "../styles/cards.module.css";
import { Link } from "react-router-dom";

const Cards = (props) => {
  return (
    <figure className={styles.card}>
      <Link
        to={`/accomodation/${props.id}`}
        state={{
          id: props.id,
        }}
      >
        <img src={props.imageUrl} alt="Description de" />
        <figcaption>{props.title}</figcaption>
      </Link>
    </figure>
  );
};

export default Cards;
