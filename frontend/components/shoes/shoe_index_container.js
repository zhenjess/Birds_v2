import { connect } from 'react-redux';

import ShoeIndex from './shoe_index';

import { fetchAllShoes, fetchShoe } from '../../actions/shoes_actions';

import { fetchCartItems } from '../../actions/cart_items_actions';

import { selectAllShoes, filterAllShoesByGender, selectItemsByGender } from '../../reducers/selectors';

import{ addToCart, removeFromCart } from '../../actions/cart_actions';

//import { fetchCartItems } from '../../actions/cart_items_actions';
import { fetchCart } from '../../actions/cart_actions';

import { openModal, closeModal } from '../../actions/modal_actions';

import { createCartItem, updateCartItem } from '../../actions/cart_items_actions';

const mapStateToProps = (state, ownProps) => {
    const shoeId = ownProps.match.params.id;
    const currentUser = state.entities.users[state.session.id];
    //debugger
    let cart;
    let quantity;

    // debugger
    return ({
        shoes: filterAllShoesByGender(state, ownProps.match.params.gender),
        shoe: state.entities.shoes[shoeId],
        currentUser: currentUser,
        shoeId: shoeId,
        cart: cart,
        cartItems: state.entities.cartItems,
        //
        quantity: state.entities.cartItems[quantity],
        users: state.entities.users,
        ownProps
    });
        
    //shoes: Object.values(state.entities.shoes),

    //selector to return an array of shoes with name material and shoe id
  //  shoes: selectAllShoesByGender(state, ownProps.match.params.gender.id), //to hard code by gender

    // items: selectItemsByGender(state, ownProps.match.params.id)

};
//shoe_id, cart, quantity = cartItem (this.props)

const mapDispatchToProps = dispatch => ({
    fetchCart: (user) => dispatch(fetchCart(user)),
    fetchAllShoes: () => dispatch(fetchAllShoes()),
    updateCartItem: (shoeId) => dispatch(updateCartItem(shoeId)),
    // fetchShoe: (shoeId) => dispatch(fetchShoe(shoeId)),
    createCartItem: (shoeId) => dispatch(createCartItem(shoeId)),
    //fetchCartItems: (user, cart) => dispatch(fetchCartItems(user, cart)),
   // fetchCartItems: (id) => dispatch(fetchCartItems(id)),
    addToCart: (cartItem) => dispatch(addToCart(cartItem)),
    // removeFromCart: (id) => dispatch(removeFromCart(id)),
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoeIndex);