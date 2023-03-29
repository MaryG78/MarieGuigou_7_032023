import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/homeGallery.module.css";
import HomeCards from "./HomeCards";

const HomeGallery = () => {
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
    <div className={styles.homegallery}>
      {data.map((accomodation) => (
        <HomeCards
          key={accomodation.id}
          title={accomodation.title}
          imageUrl={accomodation.cover}
          accomodationId={accomodation.id}
        />
      ))}
    </div>
  );
};

export default HomeGallery;
