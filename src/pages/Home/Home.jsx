import React from "react";
import ProductsList from "./components/ProductsList";
import styles from "./styles.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <ProductsList />
    </div>
  );
};

export default Home;
