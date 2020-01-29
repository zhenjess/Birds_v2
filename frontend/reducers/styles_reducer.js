import { RECEIVE_ALL_SHOES } from '../actions/shoes_actions';

const stylesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ALL_SHOES:
            return action.payload.styles;
        default:
            return state;
    }
};

export default stylesReducer;


