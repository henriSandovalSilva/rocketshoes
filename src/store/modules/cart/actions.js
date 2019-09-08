export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  };
}

export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  };
}

export function removeFromCart(productId) {
  return {
    type: '@cart/REMOVE',
    id: productId,
  };
}

export function updateAmountRequest(productId, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    id: productId,
    amount,
  };
}

export function updateAmountSuccess(productId, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCCESS',
    id: productId,
    amount,
  };
}
