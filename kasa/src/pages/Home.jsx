import React from "react";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import bannerImage from "../assets/banner.png";

const Home = () => {
  return (
    <>
      <Banner
        bannerImage={bannerImage}
        bannerText="Chez vous, partout et ailleurs"
      />
      <Gallery />
    </>
  );
};

export default Home;
