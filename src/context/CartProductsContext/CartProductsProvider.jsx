import React, { useEffect, useReducer } from "react";
import CartProductsContext from "./CartProductsContext";
import cartProductsReducer from "./cartProductsReducer";

const CartProductsProvider = ({ children }) => {
  const [cartProducts, dispatch] = useReducer(cartProductsReducer, [], () => {
    const savedCart = localStorage.getItem("cartProducts");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);

  const addToCart = (product) => {
    dispatch({ type: "ADD_PRODUCT", payload: product });
  };

  const increaseQuantity = (product) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: product });
  };

  const decreaseQuantity = (product) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: product });
  };

  return (
    <CartProductsContext.Provider
      value={{
        cartProducts,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartProductsContext.Provider>
  );
};

export default CartProductsProvider;
