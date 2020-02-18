import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import Cart from './cart';
import { fetchAllShoes } from '../../actions/shoes_actions';
import { fetchCart } from '../../actions/cart_actions';
import { createCartItem, updateCartItem, deleteCartItem } from '../../actions/cart_items_actions'; 

const mapStateToProps = (state, ownProps) => {
    const userId = state.session.id;
    const currentUser = state.entities.users[state.session.id];
    const errors = state.errors.session;     

    let cartItems = Object.values(state.entities.cartItems);
    let shoes = Object.values(state.entities.shoes);
    let users = Object.values(state.entities.users);
   debugger
    return ({
        userId: userId,
        currentUser: currentUser,
        errors: errors,
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
    createCartItem: (cartItem) => dispatch(createCartItem(cartItem)),
    updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem)),
    deleteCartItem: (cartItem) => dispatch(deleteCartItem(cartItem)),
    fetchCart: (user) => dispatch(fetchCart(user)), 
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal()),
    processForm: (user) => dispatch(login(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal())}>
                Cart
            </button>
        ),
   
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
