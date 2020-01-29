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
// export default function modalReducer(state = null, action) {
//     switch (action.type) {
//         case OPEN_MODAL:
//             return action.modal;
//         case CLOSE_MODAL:
//             return null;
//         default:
//             return state;
//     }
// }

// import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

// const modalReducer = (oldState=null, action) => {
//     Object.freeze(oldState);

//     switch(action.type) {
//         case OPEN_MODAL:
//             return action.modal;
//         case CLOSE_MODAL:
//             return null;
//         default: 
//             return oldState;
//     }
// };

// export default modalReducer;

// export default function modalReducer(state = false, action) {
//     Object.freeze(state);
//     switch (action.type) {
//         case OPEN_MODAL:
//             return true;
//         case CLOSE_MODAL:
//             return false;
//         default:
//             return state;
//     }
// }
// export default function modalReducer(state = null, action) {
//     switch (action.type) {
//         case OPEN_MODAL:
//             return action.modal;
//         case CLOSE_MODAL:
//             return null;
//         default:
//             return state;
//     }
// }
