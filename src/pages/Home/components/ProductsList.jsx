import React from "react";
import styles from "./ProductsList.module.css";
import ProductCard from "./ProductCard";
import useGetProducts from "../hooks/useGetProducts";

const ProductsList = () => {
  const { products, isFetching } = useGetProducts();

  if (isFetching) return <p>Loading...</p>;

  if (!products) return <p>No products</p>;

  return (
    <div className={styles.productsList}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
