import React from 'react';
import styles from "../styles/carroussel.module.css";

const Carroussel = (props) => {
    return (
      <section className={styles.accomodation}>
        <div className={styles.accomodation__carroussel}>
          <img src={props.imageUrl} alt="" />
        </div>
      </section>
    );
};

export default Carroussel;