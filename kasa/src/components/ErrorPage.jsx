import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/errorPage.module.css";

const ErrorPage = () => {
  return (
    <section className={styles.errorPage}>
      <h1>404</h1>
      <h2>Oops! La page que vous demandez n'existe pas.</h2>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </section>
  );
};

export default ErrorPage;
