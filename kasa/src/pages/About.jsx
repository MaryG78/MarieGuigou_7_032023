import React from 'react';
import AboutBanner from '../components/AboutBanner';
import Sections from '../components/Section';


const About = () => {
    return (
      <main>
        <AboutBanner />
        <Sections title="Fiabilité" />
        <Sections
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discriminatoire ou de perturbation du voisinage entraînera
        une exclusion de notre plateforme."
        />
        <Sections title="Service" />
        <Sections title="Responsabilité" />
      </main>
    );
};

export default About;