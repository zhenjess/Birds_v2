import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';
// import * as sessionActions from './actions/session_actions';
// import * as shoesActions from './actions/shoes_actions';
// import * as cartItemsActions from './actions/cart_items_actions';
// import * as cartActions from './actions/cart_actions';

// import * as APIUtil from './util/session_api_util';
//Components

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    let store;

    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    // window.store = store;
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;

    ReactDOM.render(<Root store={store} />, root); 

});

// document.addEventListener("DOMContentLoaded", () => {
//     let store;
//     if (window.currentUser) {
//         const preloadedState = {
//             session: { id: window.currentUser.id },
//             entities: { 
//                 users: { [window.currentUser.id]: window.currentUser }
//             }
//         };
//         store = configureStore(preloadedState);
//         delete window.currentUser;
//     } else {
//         store = configureStore();
//     }
//     window.store = store;
//     window.getState = store.getState;
//     window.dispatch = store.dispatch;
//     // window.fetchAllShoes = fetchAllShoes;
//     const root = document.getElementById('root');
//     ReactDOM.render(<Root store={store}/>, root); 
// });

// window.store = store;
// window.getState = store.getState;
// window.dispatch = store.dispatch;

// window.fetchAllShoes = shoesActions.fetchAllShoes;
// window.fetchShoe = shoesActions.fetchShoe;

// // window.fetchCartItems = cartItemsActions.fetchCartItems;
// window.createCartItem = cartItemsActions.createCartItem;

// window.fetchCart = cartActions.fetchCart;
// window.createCart = cartActions.createCart;

// window.signup = sessionActions.signup;
// window.login = sessionActions.login;
// window.logout = sessionActions.logout;