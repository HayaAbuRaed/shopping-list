import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { products as allProducts } from "../Home/data";
import styles from "./Cart.module.css";
import CartItem from "./components/CartItem";
import { cartItems } from "./data";
import { calculateTotal } from "./util";
import EmptyCart from "./components/EmptyCart";

const Cart = () => {
  const cartProducts = cartItems[0].products;

  const total = calculateTotal(cartProducts, allProducts);

  if (total <= 0) return <EmptyCart />;

  return (
    <div className={styles.cart}>
      <ul className={styles.cartList}>
        {cartProducts.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>

      <div className={styles.totalBox}>
        <h4 className={styles.total}>Total: ${total}</h4>

        <button
          className={`${styles.checkoutButton} ${
            !(total > 0) && styles.disabled
          }`}
        >
          <FontAwesomeIcon icon={faCircleCheck} />
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
