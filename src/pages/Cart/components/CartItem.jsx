import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { products } from "../../Home/data";
import styles from "./CartItem.module.css";

const CartItem = ({ item }) => {
  const product = products.find((product) => product.id === item.productId);

  const { quantity } = item;

  const { title, image, price } = product;

  return (
    <li className={styles.cartItem}>
      <img src={image} alt={title} />

      <h3>{title}</h3>

      <p>${quantity * price}</p>

      <div className={styles.quantityBox}>
        <button className={styles.quantityButton}>
          <FontAwesomeIcon icon={quantity > 1 ? faMinus : faTrashCan} />
        </button>

        <span>{quantity}</span>

        <button className={styles.quantityButton}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </li>
  );
};

export default CartItem;
