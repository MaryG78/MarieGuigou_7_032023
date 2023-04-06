import React from "react";
import styles from "../styles/accomodationTitle.module.css";
import redStar from "../assets/red-star.png";
import greyStar from "../assets/grey-star.png";

const AccomodationTitle = ({ accomodation }) => {
  const rating = accomodation.rating;
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<img src={redStar} alt="Etoile rouge" />);
    } else {
      stars.push(<img src={greyStar} alt="Etoile grise" />);
    }
  }

  return (
    <section className={styles.title}>
      <div className={styles.title__header}>
        <h1>{accomodation.title}</h1>
        <h2>{accomodation.location}</h2>
        <ul>
          {accomodation.tags.map((tag, i) => (
            <li key={i}>{tag}</li>
          ))}
        </ul>
      </div>
      <div className={styles.title__owner}>
        <ul className={styles.title__owner__stars}>
          {stars.map((star, i) => (
            <li key={i}>{star}</li>
          ))}
        </ul>
        <div className={styles.title__owner__details}>
          <h3>{accomodation.host.name}</h3>
          <div className={styles.title__owner__badge}>
            <img src={accomodation.host.picture} alt="Votre hôte" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccomodationTitle;
