import { RECEIVE_ALL_SHOES } from '../actions/shoes_actions';

const shoeOptionsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ALL_SHOES:
            return action.payload.shoeOptions;
        default:
            return state;
    }
};

export default shoeOptionsReducer;

