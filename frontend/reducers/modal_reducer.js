import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

export default function modalReducer(state = false, action) {
    Object.freeze(state);
    switch (action.type) {
        case OPEN_MODAL:
            return true;
        case CLOSE_MODAL:
            return false;
        default:
            return state;
    }
}