import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/accommodations.module.css";
import AccomodationCards from "./AccomodationCards";

const AccomodationContainer = () => {
  const [data, setData] = useState([]);

  const getAccomodationDatas = () => {
    axios
      .get("logements.json")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAccomodationDatas();
  }, []);

  return (
    <div className={styles.accomodations}>
      {data.map((accomodation) => (
        <AccomodationCards
          key={accomodation.id}
          title={accomodation.title}
          imageUrl={accomodation.cover}
        />
      ))}
    </div>
  );
};

export default AccomodationContainer;
