import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

import { RECEIVE_CART } from '../actions/cart_actions';


const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_CART:
            return Object.assign({}, state, action.users);
        default:
            return state;
    }
};

export default usersReducer;