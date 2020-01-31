import { POST_TO_CART, RECEIVE_CART } from '../actions/cart_actions';

import { RECEIVE_CART_ITEMS } from '../actions/cart_items_actions';

import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const cartsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;
    switch (action.type) {
        case RECEIVE_CART:
            newState = Object.assign({}, oldState, action.cart);
            return newState;
        case RECEIVE_CART_ITEMS:
            newState = {};
            // debugger
            // // debugger
            let firstKey = action.cartItems.cartItems ? Object.keys(action.cartItems.cartItems)[0] : null;
            let firstCartItem = action.cartItems.cartItems ? action.cartItems.cartItems[firstKey] : {};
            let cartId = firstCartItem.cartId
            newState[cartId] = action.cartItems.cartItems
            // if (cartItemsArr.length === 0) return oldState;
            // cartItemsArr.forEach(cartItem => {
            //     newState[cartItem.id] = cartItem
            // });
            // // return Object.assign({}, oldState, newState); 
            // return newState; //this returns all cartItems
            return newState
        case POST_TO_CART:
            newState = Object.assign({}, oldState, action.cartItem);
            return newState;
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return oldState;
    }
};

export default cartsReducer;
