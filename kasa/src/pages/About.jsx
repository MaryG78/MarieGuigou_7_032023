import React from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import styles from "../styles/collapseAbout.module.css";

const About = () => {
  return (
    <>
      <Banner />
      <section className={styles.collapse__about}>
        <div className={styles.collapse__about__card}>
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
        </div>
      </section>
    </>
  );
};

export default About;
