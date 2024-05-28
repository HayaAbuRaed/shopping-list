export const calculateTotal = (products) => {
  return (
    products.length > 0 &&
    products.reduce((acc, product) => {
      return product.quantity * product.price + acc;
    }, 0)
  );
};
