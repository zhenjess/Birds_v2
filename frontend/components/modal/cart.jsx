import React from 'react';

import { Link, withRouter } from 'react-router-dom';

import CartItem from './cart_item';

import { deleteCartItem, deleteCartItems, updateCartItem } from '../../util/cart_items_api_util';

import ShoeIndexz from '../shoes/shoe_index';

import ShoeIndexContainer from '../shoes/shoe_index_container';



class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            processed: false,
            subtotal: 0,
            quantity: {},
 
            animateNotification: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.quantityCount = this.quantityCount.bind(this);
        this.emptyCart = this.emptyCart.bind(this);
        this.startNotification = this.startNotification.bind(this);
        this.endNotification = this.endNotification.bind(this);
        this.handleCheckout = this.handleCheckout.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ processed: true });
    }

    componentDidMount() {

        if (!this.props.currentUser) {
            this.props.openModal();
        } else {
            this.props.fetchCart(this.props.currentUser.id);
   
            const { cartItems } = this.props;
            if (cartItems.length) {
                this.props.openModal(); 
                let subtotal = 0;
                let items = Object.values(cartItems);
                let i = 0;
                while (i < items.length) {
                    subtotal += (95 * items[i]["quantity"]);
                    i++;
                }
                this.setState({ subtotal });
            }
        }
    }

    getCartItems() {
        const { cartItems, shoes } = this.props;
        let cartItem;
        if (shoes) {
            const itemNum = cartItems[1].shoe_id;
            cartItem = shoes[itemNum];
        }
    }

    quantityCount(cartItems) {

        let totalCount = 0;

        for (let i = 0; i < cartItems.length; i++) {
            totalCount += cartItems[i]["quantity"];
        }
        return totalCount;
    }

    componentDidUpdate(prevProps) {
        let prevCount = this.quantityCount(prevProps.cartItems); 
        let currCount = this.quantityCount(this.props.cartItems);

        if (prevCount !== currCount) { 

            let subtotal = currCount * 95; 
            this.setState({ subtotal });

            const quantity = Array.from(this.state.quantity);
            quantity.push(1);
            this.setState({ quantity });
        }
    }

    handleCheckout(e) {
        const { closeModal } = this.props;
        e.preventDefault();
        this.emptyCart();
        closeModal();
        this.props.history.push('/cart');
    }

    startNotification() {
        this.setState({ animateNotification: true });
    }

    endNotification() {
        this.setState({ animateNotification: false });
    }

    updateQuantity(val) {
        let quantity = Array.from(this.state.quantity);

        quantity = val;
        this.setState(() => ({ quantity }));

        const { cartItems } = this.props;

        let subtotal = 0;
        let numItems = 0;
        cartItems.forEach((cartItem) => {
            subtotal = (95 * quantity) + subtotal;
            numItems += quantity;
        });
        this.setState(() => ({ subtotal }));
        this.setState(() => ({ numItems }));
    }

    emptyCart() {
        const { currentUser, cartItems, deleteCartItem } = this.props;
        cartItems.forEach(cartItem => deleteCartItem(cartItem.id)); 

        if (cartItems.length) {
            this.startNotification();
        }
    }

    renderErrors() {
        if (this.state.processed) {
            return (
                <div>e
                    <ul>
                        {
                            this.props.errors.map((error, i) => (
                                <li key={`error-${i}`}>{error}</li>
                            ))
                        }
                    </ul>
                </div>
            );
        }
    }

    render() {
        const { open, cartItems, updateCartItem, deleteCartItem } = this.props;
        const { subtotal } = this.state;

        cartItems.map((cartItem, i) => {
            // debugger
            return <CartItem
                cartId={cartItem.cartId}
                shoeId={cartItem.shoeId}
                quantity={cartItem.quantity}
                style={cartItem.style.style}
                material={cartItem.material.material}
                gender={cartItem.gender.gender}
                color={cartItem.color.color}
                photoUrl={cartItem.photoUrl}
                price={95}
                size={cartItem.size}
                id={cartItem.id}
                key={`${cartItem.id}-${cartItem.size}`}
                index={i}
                updateCartItem={updateCartItem}
                deleteCartItem={deleteCartItem}
            />
        });

        if (cartItems.length === 0) {
            return (
                <div className="cart-form">
                    <div className="shop-links">
                        <div className="cart-text">
                            <div className="cart-img"><i className="fas fa-shopping-cart"></i></div>
                            <p>You're $50 away from free shipping</p>
                        </div>
                        <br />
                        <p>Your Cart is Empty</p>

                        <div>
                            <Link className="shop-link" to={"/shoes/men"}><button type="button" className="submit" onClick={this.props.closeModal}>SHOP MEN</button></Link>
                        </div>

                        <div>
                            <Link className="shop-link" to={"/shoes/women"}><button type="button" className="submit" onClick={this.props.closeModal}>SHOP WOMEN</button></Link>
                        </div>
                    </div>

                </div>

            );
        } else {

            return (
                <div>
                
                    <div className="cart-upper-conatiner">
                        <div className="cart-header">
                            <h2>CART</h2>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <div className="cart-img"><i className="fas fa-shopping-cart"></i></div>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            &nbsp;
                    
                            <div className="cart-close-button" onClick={this.props.closeModal}>&#10005;</div>
                        </div>
                        <ul className="cart-items">
                           
                            {this.props.cartItems.map((cartItem, i) => {
                                {/* debugger */}
                          
                                return (
                                    <CartItem
                                        cartId={cartItem.cartId}
                                        shoeId={cartItem.shoeId}
                                        quantity={cartItem.quantity}
                                        style={cartItem.style.style}
                                        material={cartItem.material.material}
                                        gender={cartItem.gender.gender}
                                        color={cartItem.color.color}
                                        photoUrl={cartItem.photoUrl}
                                        price={95}
                                        size={cartItem.size}
                                        id={cartItem.id}
                                        key={`${cartItem.id}-${cartItem.size}`}
                                        index={i}
                                        updateCartItem={updateCartItem}
                                        deleteCartItem={deleteCartItem}
                                    />
                                );
                            })}
                        </ul>
                    </div>
                    <div>
                        <div className="cart-totals">
                            <div className="cart-costs">
                                <h3>Subtotal</h3>
                                <h3>${subtotal}</h3>
                            </div>
                            <div className="cart-costs">
                                <h3>Shipping</h3>
                                <h3>FREE</h3>
                            </div>
                            <a className="checkout" href=""><button className="submit" onClick={this.handleCheckout}>CHECKOUT</button></a>
                        </div>
                        <div className="cart-footer">
                            <p>Looking for more shoes?</p>
                            &nbsp;
                            &nbsp;
                            <div className="footer-links">
                                <p>Shop&nbsp;<Link className="shopping-link" to={"/shoes/women"} onClick={this.props.closeModal}>Women</Link></p>
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                <p>Shop&nbsp;<Link className="shopping-link" to={"/shoes/men"} onClick={this.props.closeModal}>Men</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default withRouter(Cart);

