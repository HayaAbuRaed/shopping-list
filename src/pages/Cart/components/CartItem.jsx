import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import styles from "./CartItem.module.css";
import { CartProductsContext } from "../../../context";

const CartItem = ({ product }) => {
  const { increaseQuantity, decreaseQuantity } =
    useContext(CartProductsContext);

  const { title, image, price, quantity } = product;

  const handleIncrement = () => increaseQuantity(product);

  const handleDecrement = () => decreaseQuantity(product);

  return (
    <li className={styles.cartItem}>
      <img src={image} alt={title} />

      <h3>{title}</h3>

      <p>${quantity * price}</p>

      <div className={styles.quantityBox}>
        <button className={styles.quantityButton} onClick={handleDecrement}>
          <FontAwesomeIcon icon={quantity > 1 ? faMinus : faTrashCan} />
        </button>

        <span>{quantity}</span>

        <button className={styles.quantityButton} onClick={handleIncrement}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </li>
  );
};

export default CartItem;
