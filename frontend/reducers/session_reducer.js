import { 
    RECEIVE_CURRENT_USER, 
    LOGOUT_CURRENT_USER 
} from '../actions/session_actions';

const _nullUser = Object.freeze({ id: null });

const sessionReducer = (oldState = _nullUser, action) => {
    Object.freeze(oldState);
    let newState;

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            newState = Object.assign({}, oldState, { id: action.currentUser.id });
            return newState;
        case LOGOUT_CURRENT_USER:
            newState = _nullUser;
            return newState;
        default:
            return oldState;
    }
};

export default sessionReducer;


