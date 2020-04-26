import { RECEIVE_CART_ITEM, REMOVE_CART_ITEM, REMOVE_ALL_CART_ITEMS, RECEIVE_CART_ITEMS } from '../actions/cart_items_actions'; 
import { RECEIVE_ALL_SHOES } from '../actions/shoes_actions';
import { RECEIVE_CART } from '../actions/cart_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const cartItemsReducer = (oldState = {}, action) => { 
    Object.freeze(oldState);

    let newState;
    switch (action.type) {

        case RECEIVE_CART_ITEM:
            newState = Object.assign({}, oldState, { [action.cartItem.id]: action.cartItem });
            return newState;
        case RECEIVE_ALL_SHOES:
            newState = Object.assign({}, oldState, action.payload.cartItems);
            return newState;
        case RECEIVE_CART:
            newState = Object.assign({}, oldState, action.cartItems);
            
            return newState;
        case REMOVE_CART_ITEM:
            newState = Object.assign({}, oldState);
            delete newState[action.cartItemId];
            return newState;
        case REMOVE_ALL_CART_ITEMS:
            return {};
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return oldState;
    }
};

export default cartItemsReducer;
