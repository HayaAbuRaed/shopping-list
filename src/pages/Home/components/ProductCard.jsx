import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "../../../components/Rating/Rating";
import styles from "./ProductCard.module.css";
import { useContext } from "react";
import { CartProductsContext } from "../../../context";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartProductsContext);

  const {
    title,
    description,
    price,
    image,
    rating: { rate },
  } = product;

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className={styles.productCard}>
      <img src={image} alt={title} />

      <div className={styles.columnFlex}>
        <h3>{title}</h3>

        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.priceAndRatingContainer}>
        <p className={styles.price}>${price}</p>
        <Rating initialRating={rate} readOnly={true} />
      </div>

      <div className={styles.overlay}>
        <button className={styles.addToCartButton} onClick={handleAddToCart}>
          <FontAwesomeIcon icon={faCartPlus} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
