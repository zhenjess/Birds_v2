import { connect } from 'react-redux';

import ShoeIndex from './shoe_index';

import { fetchAllShoes, fetchShoe } from '../../actions/shoes_actions';

import { fetchCartItems } from '../../actions/cart_items_actions';

import { selectAllShoes, filterAllShoesByGender, selectItemsByGender } from '../../reducers/selectors';

import{ addToCart, removeFromCart } from '../../actions/cart_actions';

import { fetchCart } from '../../actions/cart_actions';

import { openModal, closeModal } from '../../actions/modal_actions';

import { createCartItem, updateCartItem } from '../../actions/cart_items_actions';

const mapStateToProps = (state, ownProps) => {
    const shoeId = ownProps.match.params.id;
    const currentUser = state.entities.users[state.session.id];

    let cart;
    let quantity;

    return ({
        shoes: filterAllShoesByGender(state, ownProps.match.params.gender),
        shoe: state.entities.shoes[shoeId],
        currentUser: currentUser,
        shoeId: shoeId,
        cart: cart,
        cartItems: state.entities.cartItems,
        quantity: state.entities.cartItems[quantity],
        users: state.entities.users,
        ownProps
    });
 
};

const mapDispatchToProps = dispatch => ({
    fetchCart: (user) => dispatch(fetchCart(user)), 
    fetchAllShoes: () => dispatch(fetchAllShoes()),
    updateCartItem: (shoeId) => dispatch(updateCartItem(shoeId)),
    createCartItem: (shoeId) => dispatch(createCartItem(shoeId)),
    addToCart: (cartItem) => dispatch(addToCart(cartItem)),
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoeIndex);