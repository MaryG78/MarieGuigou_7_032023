import React from "react";
import styles from "../styles/accomodationTitle.module.css";

const AccomodationTitle = ({accomodation}) => {

  const rating = accomodation.rating;
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<img src="red-star.png" alt="Etoile rouge" />);
    } else {
      stars.push(<img src="grey-star.png" alt="Etoile grise" />);
    }
  }
  
  return (
    <section className={styles.title}>
      <div className={styles.title__header}>
        <h1>{accomodation.title}</h1>
        <h2>{accomodation.location}</h2>
        <ul>
          {accomodation.tags.map((tag) => (
            <li>{tag}</li>
          ))}
        </ul>
      </div>
      <div className={styles.title__owner}>
        <div className={styles.title__owner__details}>
          <h3>{accomodation.host.name}</h3>
          <div className={styles.title__owner__badge}>
            <img src={accomodation.host.picture} />
          </div>
        </div>
        <ul className={styles.title__owner__stars}>
          {stars.map((star) => (
            <li>{star}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AccomodationTitle;
