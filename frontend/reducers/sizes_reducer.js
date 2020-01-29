import { RECEIVE_ALL_SHOES } from '../actions/shoes_actions';

const sizesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ALL_SHOES:
            return action.payload.sizes;
        default:
            return state;
    }
};

export default sizesReducer;

