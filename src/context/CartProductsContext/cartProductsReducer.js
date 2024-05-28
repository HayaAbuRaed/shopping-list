const cartProductsReducer = (cartProducts, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      if (cartProducts.some((product) => product.id === action.payload.id))
        return cartProducts.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );

      return [...cartProducts, { ...action.payload, quantity: 1 }];

    case "INCREASE_QUANTITY":
      return cartProducts.map((product) =>
        product.id === action.payload.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );

    case "DECREASE_QUANTITY":
      if (action.payload.quantity === 1)
        return cartProducts.filter(
          (product) => product.id !== action.payload.id
        );

      return cartProducts.map((product) =>
        product.id === action.payload.id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );

    default:
      return cartProducts;
  }
};

export default cartProductsReducer;
