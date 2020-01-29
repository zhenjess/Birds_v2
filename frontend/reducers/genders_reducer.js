import { RECEIVE_ALL_SHOES } from '../actions/shoes_actions';

const gendersReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ALL_SHOES:
            return action.payload.genders;
        default:
            return state;
    }
};

export default gendersReducer;

