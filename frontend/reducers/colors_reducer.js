import { RECEIVE_ALL_SHOES } from '../actions/shoes_actions';

const colorsReducer = (state={}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ALL_SHOES:
            return action.payload.colors;
        default: 
            return state;
    }
};

export default colorsReducer;

