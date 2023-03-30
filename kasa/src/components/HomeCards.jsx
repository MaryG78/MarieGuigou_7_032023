import React from "react";
import styles from "../styles/homeCards.module.css";
import { Link } from "react-router-dom";

const HomeCards = (props) => {
  return (
    <figure className={styles.homecard}>
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

export default HomeCards;
