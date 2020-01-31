import { RECEIVE_CART_ITEM, REMOVE_CART_ITEM, REMOVE_ALL_CART_ITEMS, RECEIVE_CART_ITEMS } from '../actions/cart_items_actions';
import { RECEIVE_ALL_SHOES } from '../actions/shoes_actions';
import { RECEIVE_CART } from '../actions/cart_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const cartItemsReducer = (oldState = {}, action) => { //oldState=[]
    Object.freeze(oldState);

    //debugger
    //let newState = oldState.slice(0);
    let newState;
    switch(action.type) {
        case RECEIVE_CART_ITEMS:
             newState = {};
            // debugger
            Object.values(action.cartItems.cartItems).forEach(cartItem => {
                newState[cartItem.id] = cartItem
            }); 
            // return Object.assign({}, oldState, newState); 
            return newState; //this returns all cartItems

        case RECEIVE_CART_ITEM:
          // debugger
           // newState.push(action.cartItem); 
            // newState = Object.assign({}, oldState, action.cartItem);
            newState = Object.assign({}, oldState, { [action.cartItem.id]: action.cartItem });
           // newState.push(action.cartItem); 
            return newState;
        case RECEIVE_ALL_SHOES:
            newState = Object.assign({}, oldState, action.payload.cartItems);
            return newState;
        case RECEIVE_CART:
            newState = Object.assign({}, oldState, action.cartItems);
            return newState;
        case REMOVE_CART_ITEM:
             debugger
            newState = Object.assign({}, oldState);
            // delete newState[action.cartItem.id];
            delete newState[action.cartItemId];
            return newState;
        case REMOVE_ALL_CART_ITEMS:
            return {};
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return oldState;
    }
};

export default cartItemsReducer;



// import { RECEIVE_CART_ITEM, REMOVE_CART_ITEM, REMOVE_ALL_CART_ITEMS } from '../actions/cart_items_actions';
// import { RECEIVE_ALL_SHOES } from '../actions/shoes_actions';
// import { RECEIVE_CART } from '../actions/cart_actions';
// import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from '../actions/session_actions';

// const cartItemsReducer = (oldState={}, action) => {
//     Object.freeze(oldState);

//     let newState;
    
//     switch(action.type) {
//         case RECEIVE_CURRENT_USER:
//             if(!action.currentUser.cart) {
//                 return {};
//             } else {
//                 return action.currentUser.cart;
//             }
//         case RECEIVE_ALL_SHOES:
//             newState = Object.assign({}, oldState, action.payload.cartItems);
//             return newState;
//         case RECEIVE_CART:
//             newState = Object.assign({}, oldState, action.cartItems);
//             return newState;
//         case RECEIVE_CART_ITEM:
//             newState = Object.assign({}, oldState, action.cartItems);
//             return newState;
//         case LOGOUT_CURRENT_USER:
//             return {};
//         case REMOVE_ALL_CART_ITEMS:
//             return {};
//         case REMOVE_CART_ITEM:
//             newState = Object.assign({}, oldState);
//             delete newState[action.cartItem.id];
//             return newState;
//         default:
//             return oldState;
//     }
// };

// export default cartItemsReducer;


// import { RECEIVE_ITEM } from '../actions/cart_items_actions';
// import { RECEIVE_ALL_SHOES } from '../actions/shoes_actions';
// import { RECEIVE_CART, REMOVE_FROM_CART } from '../actions/cart_actions';
// import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

// const cartItemsReducer = (oldState = {}, action) => { //oldState=[]
//     Object.freeze(oldState);

//     //let newState = oldState.slice(0);
//     let newState;
//     switch(action.type) {
//         case RECEIVE_ITEM:
//         //   debugger
//            // newState.push(action.cartItem); 
//             // newState = Object.assign({}, oldState, action.cartItem);
//             newState = Object.assign({}, oldState, { [action.cartItem.id]: action.cartItem });
//            // newState.push(action.cartItem); 
//             return newState;
//         case RECEIVE_ALL_SHOES:
//             newState = Object.assign({}, oldState, action.payload.cartItems);
//             return newState;
//         case RECEIVE_CART:
//             newState = Object.assign({}, oldState, action.cartItems);
//             return newState;
//         case REMOVE_FROM_CART:
//             debugger
//             newState = Object.assign({}, oldState);
//             delete newState[action.id];
//             return newState;
//         case LOGOUT_CURRENT_USER:
//             return {};
//         default:
//             return oldState;
//     }
// };

// export default cartItemsReducer;




// import { RECEIVE_ITEMS } from '../actions/cart_items_actions';
// import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

// const itemsReducer = (oldState={}, action) => {
//     Object.freeze(oldState);

//     let newState;
//     switch(action.type) {
//         case RECEIVE_ITEMS:
//             newState = Object.assign({}, oldState, action.items); 
//             return newState;   
//         case LOGOUT_CURRENT_USER:
//             return {};
//         default:
//             return oldState;
//     }
// };

// export default itemsReducer;