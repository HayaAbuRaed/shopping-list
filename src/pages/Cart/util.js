const findProductPrice = (products, productId) => {
  const product = products.find((product) => product.id === productId);
  return product ? product.price : 0;
};

export const calculateTotal = (items, products) => {
  return items.reduce((acc, item) => {
    return item.quantity * findProductPrice(products, item.productId) + acc;
  }, 0);
};
