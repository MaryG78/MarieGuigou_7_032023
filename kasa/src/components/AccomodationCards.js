import React from "react";
import styles from "../styles/accomodationCards.module.css";



const AccomodationCards = (props) => {
    return (
        <div className={styles.card}>
          <img src={props.imageUrl} />
          <h2>{props.title}</h2>
        </div>
    );
};

export default AccomodationCards;