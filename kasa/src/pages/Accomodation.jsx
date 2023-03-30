import React, { useEffect, useState } from "react";
import axios from "axios";
import Carroussel from "../components/Carroussel";
import AccomodationTitle from "../components/AccomodationTitle";
import Collapse from "../components/Collapse";
import { useLocation } from "react-router-dom";
import styles from "../styles/collapse.module.css";

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
    <>
      <Carroussel imageUrl={selectedAccomodation.cover} />
      <AccomodationTitle accomodation={selectedAccomodation} />
      <div className={styles.collapse__container}>
        <Collapse
          title="Description"
          content={selectedAccomodation.description}
        />
        <Collapse
          title="Equipements"
          content={selectedAccomodation.equipments.map((equipment) => (
            <span>{equipment}</span>
          ))}
        />
      </div>
    </>
  );
};

export default Accomodation;
