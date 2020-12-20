import * as actionTypes from "./shopping-types";

export const addToCart = (gemstone) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: { product: gemstone },
  };
};
export const removeFromCard = (itemId) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: { id: itemId },
  };
};
export const clearCart = () => {
  return {
    type: actionTypes.CLEAR_CART,
  };
};
