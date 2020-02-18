import { RECEIVE_ALL_SHOES } from '../actions/shoes_actions'; 

const materialsReducer = (state={}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ALL_SHOES:
            return action.payload.materials;
        default:
            return state;
    }
};

export default materialsReducer;


