import React from "react";
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from "react";
import styles from "../styles/banner.module.css";

const Banner = () => {
 const [aboutPage, setAboutPage] = useState(false);

 const location = useLocation();

 useEffect(() => {
   if (location.pathname === "/about") {
     setAboutPage(true);
   }
 }, []);

 return (
   <section className={aboutPage ? styles.banner_about : styles.banner}>
     {!aboutPage && <p>Chez vous, partout et ailleurs</p>}
   </section>
 );
};

export default Banner;
