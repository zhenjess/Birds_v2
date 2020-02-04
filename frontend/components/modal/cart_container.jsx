import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import Cart from './cart';
import { fetchAllShoes } from '../../actions/shoes_actions';
import { fetchCart } from '../../actions/cart_actions';
import { createCartItem, updateCartItem, deleteCartItem, deleteCartItems } from '../../actions/cart_items_actions'; //fetchCartItems,
// import { fetchCart } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    const userId = state.session.id;
    const currentUser = state.entities.users[state.session.id];
    const errors = state.errors.session;     
    const cart = state.entities.carts.id;
    let cartItems = Object.values(state.entities.cartItems);
    let shoes = Object.values(state.entities.shoes);
    let users = Object.values(state.entities.users);
   //debugger
    return ({
        userId: userId,
        currentUser: currentUser,
        errors: errors,
        cart: cart,
        cartItems: cartItems,
        shoes: shoes,
        checkoutItems: state.entities.cartItems,
        users: users,
        ownProps,
        formType: 'shoe'
    });
};

const mapDispatchToProps = dispatch => ({
    fetchAllShoes: () => dispatch(fetchAllShoes()),
    // fetchCartItems: (cart) => dispatch(fetchCartItems(cart)),
    createCartItem: (cartItem) => dispatch(createCartItem(cartItem)),
    updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem)),
    deleteCartItem: (cartItem) => dispatch(deleteCartItem(cartItem)),
    deleteCartItems: () => dispatch(deleteCartItems()),
    fetchCart: (user) => dispatch(fetchCart(user)), //, cartId
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal()),
    processForm: (user) => dispatch(login(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('Cart'))}>
                Cart
            </button>
        ),
   
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

// import { connect } from 'react-redux';
// import React from 'react';
// import { shoes } from '../../actions/session_actions';
// import { openModal, closeModal } from '../../actions/modal_actions';
// import Cart from './cart';
// import { fetchAllShoes } from '../../actions/shoes_actions';
// import { fetchCart, removeFromCart } from '../../actions/cart_actions';
// import { fetchCartItems, createCartItem, deleteCartItem, deleteCartItems } from '../../actions/cart_items_actions';
// import { fetchCurrentCartID } from '../../actions/session_actions';

// // import NestForm from './nest_form';

// const mapStateToProps = ( state, ownProps ) => {
//     //debugger
//     // const userId = ownProps.match.params.id;
//     const userId = state.session.id;
//     const currentUser = state.entities.users[state.session.id];
//     const errors = state.errors.session;
//     const cart = state.entities.carts.id;

//     // if (Object.values(state.entities.carts).length > 0) {
//     //     cart = Object.values(state.entities.carts.id);
//     // } else {
//     //     cart = [];
//     // }

//     let cartItems;
//     if (Object.values(state.entities.cartItems).length > 0) {
//         //debugger
//         cartItems = Object.values(state.entities.cartItems);
//         //debugger
//     } else {
//         cartItems = [];
//     }
//     // debugger
//     let shoes;
//     if (Object.values(state.entities.shoes).length > 0) {
//         shoes = state.entities.shoes;
//     } else {
//         shoes = {};
//     }

//     let users;
//     if (Object.values(state.entities.users).length > 0) {
//         users = state.entities.users;
//     } else {
//         users = {};
//     }

//     return ({
//         currentUser,
//         userId: userId,
//         errors,
//         cart,
//         cartItems,
//         shoes,
//         users,
//         formType: 'shoe',
//         ownProps

//     });
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchAllShoes: () => dispatch(fetchAllShoes()),
//         createCartItem: (user, shoeId) => dispatch(createCartItem(user, shoeId)),
//         deleteCartItem: (user, cart, cartItem) => dispatch(deleteCartItem(user, cart, cartItem)),
//         fetchCartItem: (user, cart, cartItem) => dispatch(fetchCartItem(user, cart, cartItem)),
//         fetchCart: (user, id) => dispatch(fetchCart(user, id)),
//         fetchCurrentCartID: (user) => dispatch(fetchCurrentCartID(user)),
//         removeFromCart: (id) => dispatch(removeFromCart(id)),

//         processForm: (user) => dispatch(login(user)),
//         otherForm: (
//             <button onClick={() => dispatch(openModal('Cart'))}>
//                 Cart
//             </button>
//         ),
//         openModal: () => dispatch(openModal()),
//         closeModal: () => dispatch(closeModal())
//     };
// };


// export default connect(mapStateToProps, mapDispatchToProps)(Cart);

    // return {
    //     errors: state.errors.session,
    //     formType: 'shoe',
    //     items: Object.values(state.entities.carts)
    // };

// const mapDispatchToProps = dispatch => {
//     return {
//         removeFromCart: (id, size) => dispatch(removeFromCart(id, size)),
//         processForm: (user) => dispatch(login(user)),
//         otherForm: (
//             <button onClick={() => dispatch(openModal('Cart'))}>
//                 Cart
//             </button>
//         ),
//         closeModal: () => dispatch(closeModal())
//     };
// };