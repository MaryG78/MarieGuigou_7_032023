import React, { useState } from "react";
import styles from "../styles/slideShow.module.css";
import nextButton from "../assets/button-next.png";
import returnButton from "../assets/button-return.png";

const SlideShow = ({ pictures }) => {
  const [currentPicture, setCurrentPicture] = useState(0);

  const moveToNext = () => {
    setCurrentPicture(currentPicture + 1);
    if (currentPicture === pictures.length - 1) setCurrentPicture(0);
  };

  const moveToPrevious = () => {
    setCurrentPicture(currentPicture - 1);
    if (currentPicture === 0) setCurrentPicture(pictures.length - 1);
  };

  return (
    <section
      style={{ backgroundImage: `url(${pictures[currentPicture]})` }}
      className={styles.slideShow}
    >
      {pictures.length > 1 && (
        <>
          <img
            className={`${styles.carousel__arrow} ${styles.carousel__arrow_next}`}
            src={nextButton}
            alt="suivante"
            onClick={moveToPrevious}
          />
          <img
            className={`${styles.carousel__arrow} ${styles.carousel__arrow_return}`}
            src={returnButton}
            alt="précédente"
            onClick={moveToNext}
          />
          <p className={styles.slideCount}>
            {currentPicture + 1} / {pictures.length}
          </p>
        </>
      )}
    </section>
  );
};

export default SlideShow;
