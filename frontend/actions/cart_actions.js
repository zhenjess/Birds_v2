import * as APIUtil from '../util/cart_api_util';
import * as CartItemAPIUtil from '../util/cart_items_api_util';

export const RECEIVE_CART = "RECEIVE_CART";
export const POST_TO_CART = "POST_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";


const receiveCart = (payload) => {
    //debugger
    return ({
        type: RECEIVE_CART,
        cart: payload,
        shoes: payload.shoes,
        cartItems: payload.cartItems,
        users: payload.users
    });
};

const postToCart = (payload) => {
    return ({
        type: POST_TO_CART,
        cartItem: payload
    });
};

// const removeCartItem = (cartItemId) => {
//     return ({
//         type: REMOVE_FROM_CART,
//         cartItemId
//     });
// };

function receiveCartItems(cartItem) {
    let state = Object.assign({}, cartItem);
    let key = `${cartItem.id}`;
    return ({
        [key]: state
    });
}

export const createCart = (user) => dispatch => {
    return APIUtil.createCart(user)
        .then((payload) => dispatch(receiveCart(payload)))
};

export const fetchCart = (user) => dispatch => { //, cartId
    return APIUtil.fetchCart(user)
        .then((payload) => dispatch(receiveCart(payload)))
}

export const addToCart = (cartItem) => dispatch => {
    return CartItemAPIUtil.createCartItem(cartItem)
        .then((payload) => {
           // debugger
            dispatch(receiveCartItems(payload))
        })
}

// export const addToCart = (cartItem) => dispatch => {
//     const payload = receiveCartItems(cartItem);
//     function _func(payload) {
//         return dispatch(postToCart(payload));
//     }
//     return _func(payload);
// };


// export const removeFromCart = (cartItemId) => dispatch => {
//     function _func(cartItemId) {
//         return dispatch(removeCartItem(cartItemId));
//     }
//     return _func(cartItemId);
// }

