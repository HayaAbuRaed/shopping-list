import React from "react";
import empty from "../../../assets/empty.png";
import styles from "../Cart.module.css";

const EmptyCart = () => {
  return (
    <div className={styles.emptyCart}>
      <img src={empty} alt="empty cart" />

      <h2>Your cart is empty</h2>

      <p>
        Add some products in the cart to checkout. Return to the{" "}
        <a href="/">home page</a> to see our products.
      </p>
    </div>
  );
};

export default EmptyCart;
