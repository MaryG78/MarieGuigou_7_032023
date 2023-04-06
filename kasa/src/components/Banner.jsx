import React from "react";
import styles from "../styles/banner.module.css";

const Banner = (props) => {
  return (
    <section className={`${styles.banner} ${props.className}`}>
      <img src={props.bannerImage} alt="Une rivière entourée de montagnes" />
      <p>{props.bannerText ? props.bannerText : null}</p>
    </section>
  );
};

export default Banner;
