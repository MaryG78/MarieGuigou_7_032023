import React from 'react';
import AboutBanner from '../components/AboutBanner';
import AboutDescriptions from '../components/AboutDescriptions';


const About = () => {
    return (
      <main>
        <AboutBanner />
        <div className="sections-container">
          <AboutDescriptions
            title="Fiabilité"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discriminatoire ou de perturbation du voisinage entraînera
        une exclusion de notre plateforme."
          />
          <AboutDescriptions
            title="Respect"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discriminatoire ou de perturbation du voisinage entraînera
        une exclusion de notre plateforme."
          />
          <AboutDescriptions
            title="Service"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discriminatoire ou de perturbation du voisinage entraînera
        une exclusion de notre plateforme."
          />
          <AboutDescriptions
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