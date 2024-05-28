import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import CartProductsContext from "../../context/CartProductsContext/CartProductsContext";
import styles from "./Cart.module.css";
import CartItem from "./components/CartItem";
import EmptyCart from "./components/EmptyCart";
import { calculateTotal } from "./util";
import { CheckoutDialog } from "../../containers/Dialogs";

const Cart = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { cartProducts } = useContext(CartProductsContext);

  const total = calculateTotal(cartProducts);

  if (total <= 0) return <EmptyCart />;

  const handleCheckoutClick = () => {
    setIsDialogOpen(true);
  };

  return (
    <>
      <div className={styles.cart}>
        <ul className={styles.cartList}>
          {cartProducts.map((item) => (
            <CartItem key={item.id} product={item} />
          ))}
        </ul>

        <div className={styles.totalBox}>
          <h4 className={styles.total}>Total: ${total}</h4>

          <button
            className={`${styles.checkoutButton} ${
              !(total > 0) && styles.disabled
            }`}
            onClick={handleCheckoutClick}
          >
            <FontAwesomeIcon icon={faCircleCheck} />
            Checkout
          </button>
        </div>
      </div>

      {isDialogOpen && (
        <CheckoutDialog onClose={() => setIsDialogOpen(false)} />
      )}
    </>
  );
};

export default Cart;
