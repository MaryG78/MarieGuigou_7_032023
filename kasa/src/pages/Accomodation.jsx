import React, { useEffect, useState } from "react";
import axios from "axios";
import AccomodationCarroussel from "../components/AccomodationCarroussel";
import AccomodationTitle from "../components/AccomodationTitle";
import AccomodationDescriptions from "../components/AccomodationDescriptions";
import { useLocation } from "react-router-dom";
import styles from "../styles/accomodationDescription.module.css";

const Accomodation = () => {
  const location = useLocation();

  const [selectedAccomodation, setSelectedAccomodation] = useState();

  const fetchAccomadationData = () => {
    axios
      .get("logements.json")
      .then((response) => {
        const accomodationsDatas = response.data; // récupérer les données depuis la réponse
        const accomodationData = accomodationsDatas.find(
          (accomodation) => accomodation.id === location.state.accomodationId
        );
        setSelectedAccomodation(accomodationData);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchAccomadationData();
  }, []);

  if (selectedAccomodation == null) return <div>...Loading</div>;
  return (
    <main>
      <AccomodationCarroussel imageUrl={selectedAccomodation.cover} />
      <AccomodationTitle accomodation={selectedAccomodation} />
      <div className={styles.accomodationDescription__container}>
        <AccomodationDescriptions
          title="Description"
          content={selectedAccomodation.description}
        />
        <AccomodationDescriptions
          title="Equipements"
          content={selectedAccomodation.equipments.map((equipment) => (
            <span>{equipment}</span>
          ))}
        />
      </div>
    </main>
  );
};

export default Accomodation;
