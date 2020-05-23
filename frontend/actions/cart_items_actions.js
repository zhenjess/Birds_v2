import * as APIUtil from '../util/cart_items_api_util';

export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM';
export const RECEIVE_CART_ITEM_ERRORS = 'RECEIVE_CART_ITEM_ERRORS';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const REMOVE_ALL_CART_ITEMS = 'REMOVE_ALL_CART_ITEMS';

const receiveCartItem = (cartItem) => {
    return ({
        type: RECEIVE_CART_ITEM,
        cartItem: cartItem
    })
}

const receiveCartItemErrors = (errors) => {
    return ({
        type: RECEIVE_CART_ITEM_ERRORS,
        errors
    })
}

const removeCartItem = (cartItem) => {
    return ({
        type: REMOVE_CART_ITEM,
        cartItemId: cartItem.id  
    })
}

export const createCartItem = (cartItem) => dispatch => {
    return APIUtil.createCartItem(cartItem)
        .then((cartItem) =>  {
            dispatch(receiveCartItem(cartItem)),
            (errors) => dispatch(receiveCartItemErrors(errors.responseJSON))})
};

export const updateCartItem = (cartItem) => dispatch => {
    return APIUtil.updateCartItem(cartItem)
        .then((cartItem) => dispatch(receiveCartItem(cartItem)),
            (errors) => dispatch(receiveCartItemErrors(errors.responseJSON)))
};

export const deleteCartItem = (cartItemId) => dispatch => {
    return APIUtil.deleteCartItem(cartItemId)
        .then((cartItemId) => dispatch(removeCartItem(cartItemId)))
};
