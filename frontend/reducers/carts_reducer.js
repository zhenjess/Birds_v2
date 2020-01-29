import { POST_TO_CART, RECEIVE_CART } from '../actions/cart_actions';

import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const cartsReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    let newState;
    switch (action.type) {
        case RECEIVE_CART:
            newState = Object.assign({}, oldState, action.cart);
            return newState;
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