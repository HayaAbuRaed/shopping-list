import React from "react";
import { products } from "../data";
import styles from "./ProductsList.module.css";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  return (
    <div className={styles.productsList}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
