import React from 'react';
import AboutBanner from '../components/AboutBanner';
import Sections from '../components/Section';


const About = () => {
    return (
      <main>
        <AboutBanner />
        <div className='sections-container'>
          <Sections
            title="Fiabilité"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discriminatoire ou de perturbation du voisinage entraînera
        une exclusion de notre plateforme."
          />
          <Sections
            title="Respect"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discriminatoire ou de perturbation du voisinage entraînera
        une exclusion de notre plateforme."
          />
          <Sections
            title="Service"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discriminatoire ou de perturbation du voisinage entraînera
        une exclusion de notre plateforme."
          />
          <Sections
            title="Responsabilité"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discriminatoire ou de perturbation du voisinage entraînera
        une exclusion de notre plateforme."
          />
        </div>
      </main>
    );
};

export default About;