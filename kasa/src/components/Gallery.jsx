import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/gallery.module.css";
import Cards from "./Cards";

const Gallery = () => {
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
    <div className={styles.gallery}>
      {data.map((accomodation) => (
        <Cards
          key={accomodation.id}
          title={accomodation.title}
          imageUrl={accomodation.cover}
          accomodationId={accomodation.id}
        />
      ))}
    </div>
  );
};

export default Gallery;
