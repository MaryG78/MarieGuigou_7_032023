import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import AccomodationTitle from "../components/AccomodationTitle";
import Collapse from "../components/Collapse";
import { useParams, useNavigate } from "react-router-dom";
import styles from "../styles/collapseAccomodation.module.css";
import SlideShow from "../components/SlideShow";

const Accomodation = () => {
  let location = useParams();
  const navigate = useNavigate();

  const [selectedAccomodation, setSelectedAccomodation] = useState();

  const fetchAccomadationData = useCallback(async () => {
    try {
      const response = await axios.get("/logements.json");
      const accomodationsDatas = await response.data;
      const accomodationData = await accomodationsDatas.find(
        (accomodation) => accomodation.id === location.id
      );
      if (!accomodationData) {
        navigate("/Error");
      } else {
        setSelectedAccomodation(accomodationData);
      }
    } catch (err) {
      console.log(err);
    }
  }, [location.id, navigate, setSelectedAccomodation]);

  useEffect(() => {
    fetchAccomadationData();
  }, [fetchAccomadationData]);

  if (selectedAccomodation == null) return <div>...Loading</div>;

  return (
    <>
      <SlideShow pictures={selectedAccomodation.pictures} />
      <AccomodationTitle accomodation={selectedAccomodation} />
      <section className={styles.collapse__accomodation}>
        <div className={styles.collapse__accomodation__card}>
          <Collapse
            title="Description"
            content={selectedAccomodation.description}
          />
        </div>
        <div className={styles.collapse__accomodation__card}>
          <Collapse
            title="Equipements"
            content={
              <span>
                {selectedAccomodation.equipments.map((equipment, i) => (
                  <li key={i}>{equipment}</li>
                ))}
              </span>
            }
          />
        </div>
      </section>
    </>
  );
};

export default Accomodation;
