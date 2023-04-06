import React from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import styles from "../styles/collapseAbout.module.css";
import styles1 from "../styles/banner.module.css";
import bannerImage from "../assets/about-banner.png";

const About = () => {
  return (
    <>
      <Banner bannerImage={bannerImage} className={styles1.aboutBanner} />
      <section className={styles.collapse__about}>
        <Collapse
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          className={styles.about__header}
          contentclassName={styles.about__content}
        />
        <Collapse
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discriminatoire ou de perturbation du voisinage entraînera
        une exclusion de notre plateforme."
          className={styles.about__header}
          contentclassName={styles.about__content}
        />
        <Collapse
          title="Service"
          content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          className={styles.about__header}
          contentclassName={styles.about__content}
        />
        <Collapse
          title="Sécurité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          className={styles.about__header}
          contentclassName={styles.about__content}
        />
      </section>
    </>
  );
};

export default About;
