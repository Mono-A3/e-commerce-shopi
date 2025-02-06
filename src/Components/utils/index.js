/**
 * This function calculate total price of a new order
 * @param {Array} products cartProduct: Array of Objects
 * @returns {Number} Total price
 */
export const totalPrice = (products) => {
  return products.reduce((total, product) => total + product.price, 0);
};
