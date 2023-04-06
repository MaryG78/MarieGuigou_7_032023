import React from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import styles from "../styles/collapseAbout.module.css";
import bannerImage from "../assets/about-banner.png";

const About = () => {
  return (
    <>
      <Banner bannerImage={bannerImage} />
      <section className={styles.collapse__about}>
        <Collapse
          title="Fiabilité"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discriminatoire ou de perturbation du voisinage entraînera
        une exclusion de notre plateforme."
        />
        <Collapse
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discriminatoire ou de perturbation du voisinage entraînera
        une exclusion de notre plateforme."
        />
        <Collapse
          title="Service"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discriminatoire ou de perturbation du voisinage entraînera
        une exclusion de notre plateforme."
        />
        <Collapse
          title="Responsabilité"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discriminatoire ou de perturbation du voisinage entraînera
        une exclusion de notre plateforme."
        />
      </section>
    </>
  );
};

export default About;
