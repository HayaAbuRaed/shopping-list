import React, { useState } from "react";
import styles from "./ProductsList.module.css";
import ProductCard from "./ProductCard";
import useGetProducts from "../hooks/useGetProducts";
import Snackbar from "../../../containers/Snackbar";
import ListLoadingSkeleton from "./ListLoadingSkeleton";

const ProductsList = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const { products, isFetching } = useGetProducts();

  if (isFetching) return <ListLoadingSkeleton />;

  if (!products) return <p>No products</p>;

  return (
    <>
      <div className={styles.productsList}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAdd={() => setSnackbarOpen(true)}
          />
        ))}
      </div>

      <Snackbar
        message="✅ Product is added to cart"
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
      />
    </>
  );
};

export default ProductsList;
