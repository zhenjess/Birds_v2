import { RECEIVE_CART_ITEM, RECEIVE_CART_ITEM_ERRORS } from '../actions/cart_items_actions';
import { CLEAR_ERRORS } from '../actions/session_actions';

const cartItemsErrorsReducer = (oldState=[], action) => {
    Object.freeze(oldState);

    let newState = [];

    switch(action.type) {
        case RECEIVE_CART_ITEM:
            return newState;
        case RECEIVE_CART_ITEM_ERRORS:
            newState = newState.concat(action.errors);
            return newState;
        case CLEAR_ERRORS:
            return [];
        default:
            return oldState;
    }
};

export default cartItemsErrorsReducer;

