import * as APIUtil from '../util/cart_items_api_util';

// export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS';
export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM';
export const RECEIVE_CART_ITEM_ERRORS = 'RECEIVE_CART_ITEM_ERRORS';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const REMOVE_ALL_CART_ITEMS = 'REMOVE_ALL_CART_ITEMS';

// const receiveCartItems = (cartItems) => {
//     return ({
//         type: RECEIVE_CART_ITEMS,
//         cartItems: cartItems
//     })
// }
const receiveCartItem = (cartItem) => {
    // debugger
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
    //debugger
    return ({
        type: REMOVE_CART_ITEM,
        cartItemId: cartItem.id  // cartItemId: Object.keys(response.cartItems)
    })
}

const removeAllCartItems = () => {
    return ({
        type: REMOVE_ALL_CART_ITEMS
    })
}

// export const fetchCartItems = (cartId) => dispatch => {
//     return APIUtil.fetchCartItems(cartId)
//         .then((cartItems) => dispatch(receiveCartItems(cartItems)))
// };

export const createCartItem = (cartItem) => dispatch => {
    return APIUtil.createCartItem(cartItem)
        .then((cartItem) => dispatch(receiveCartItem(cartItem)),
            (errors) => dispatch(receiveCartItemErrors(errors.responseJSON)))
};

export const updateCartItem = (cartItem) => dispatch => {
    return APIUtil.updateCartItem(cartItem)
        .then((cartItem) => dispatch(receiveCartItem(cartItem)),
            (errors) => dispatch(receiveCartItemErrors(errors.responseJSON)))
};

export const deleteCartItem = (cartItemId) => dispatch => {
    //debugger
    return APIUtil.deleteCartItem(cartItemId)
        .then((cartItemId) => dispatch(removeCartItem(cartItemId)))
};

<<<<<<< HEAD
// export const deleteCartItems = (cartId) => dispatch => {
    
//     return APIUtil.deleteCartItems(cartId) 
//         .then((res) => { // BUG: Not working here
//             debugger
//             dispatch(removeAllCartItems())
//         }, (err) => {
//             console.log("Testing 123");
//             console.log(err);
//         }  )
// };

=======
export const deleteCartItems = (cartId) => dispatch => {
    return APIUtil.deleteCartItems(cartId)
        .then(() => dispatch(removeAllCartItems()))
};
>>>>>>> master


// import * as APIUtil from '../util/cart_items_api_util';

// export const RECEIVE_ITEM = 'RECEIVE_ITEM';
// export const REMOVE_ITEM = 'REMOVE_ITEM';

// const receiveItem = (response) => {
//     //debugger; 
//     return ({
//         type: RECEIVE_ITEM,
//         cartItem: response
//     })
// }

// const removeItem = (response) => {
//     debugger
//     return ({
//         type: REMOVE_ITEM,
//         cartItemId: Object.keys(response.cartItems)
//     })
// }

// export const createCartItem = (user, cartItem) => dispatch => {
//     //debugger; 
//     return APIUtil.createCartItem(user, cartItem)
//         .then(response => {
//             //debugger; 
//             dispatch(receiveItem(response));
//         })
// };

// export const fetchCartItem = (user, cart, cartItem) => dispatch => {
//     return APIUtil.fetchCartItem(user, cart,  cartItem)
//         .then(response => dispatch(receiveItem(response)))
// };


// export const deleteCartItem = (user, cart, cartItem) => dispatch => {
//     debugger; 
//     return APIUtil.deleteCartItem(user, cart, cartItem)
//         .then(response => {
//             debugger; 
//             dispatch(removeItem(response));
//         })
//     return APIUtil.deleteCartItem(user, cart, cartItem)
//         .then(response => dispatch(removeItem(response)));
// }
// export const createCartItem = (shoe_id) => dispatch => (
//     APIUtil.createCartItem(shoe_id)
//         .then(item => {
//             debugger
//            return dispatch(receiveItem(item))}, //making and creating 1 cart item
//             )

// );

// const receiveItem = item => ({
//     type: RECEIVE_ITEM, //change receive items to receive item in reducer
//     //then put in to state, since cart has shoe not cart item
//     item: item
// });

// export const createCartItems = (shoe_id) => dispatch => (
//     APIUtil.createCartItems(shoe_id)
//         .then(items => dispatch(receiveItems(items)))
// );


// export const createCartItem = (user, cartItem) => dispatch => {
//     return APIUtil.createCartItem(user, cartItem)
//         .then(item => dispatch(receiveItem(item)));
// }

// export const createCartItem = (shoe_id) => dispatch => (
//     APIUtil.createCartItem(shoe_id)
//         .then(item => {
//             debugger
//            return dispatch(receiveItem(item))}, //making and creating 1 cart item
//             )

// );

// export const fetchCartItems = () => dispatch => (
//     APIUtil.fetchCartItems()
//         .then(items => dispatch(receiveItems(items)))
// );

// export const fetchShoeItems = id => dispatch => (
//     APIUtil.fetchShoeItems(id)
//         .then(items => dispatch(receiveItems(items)))
// );

