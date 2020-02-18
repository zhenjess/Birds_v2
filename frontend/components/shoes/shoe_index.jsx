import React from 'react';

import { Route } from 'react-router-dom';

import ShoesHeader from './shoes_header';

import ShoeIndexItem from './shoe_index_item';

import CartItem from '../modal/cart_item';

import Filter from './filter';

import ShoeFilter from './shoe_filter';

class ShoeIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            shouldAnimate: false,
            animateItems: true,
            animateNotification: false,
            cart: {}
        };
        this.handleAnimationEnd = this.handleAnimationEnd.bind(this);
        this.startNotification = this.startNotification.bind(this);
        this.endNotification = this.endNotification.bind(this);
    }

    componentDidMount() {

        const id = this.props.match.params.id;

        this.props.fetchAllShoes();

        if (this.props.currentUser) {
            this.props.fetchCart(this.props.currentUser.id).then((cart) => { 
                this.setState({
                   cart: cart
                });
            });
        }
    }

    componentDidUpdate(prevProp) {
        const id = this.props.match.params.id;
        if (this.props.location.pathname !== prevProp.location.pathname) {
        }
    }

    handleAnimationEnd() {
        this.setState({ shouldAnimate: false });
    }

    startNotification() {
        this.setState({ animateNotification: true });
    }

    endNotification() {
        this.setState({ animateNotification: false });
    }

    getShoesByMaterialAndModel(material, style) {
        let shoesArr = this.props.shoes.filter(shoe => shoe.style.toLowerCase() === style && shoe.material.toLowerCase() === material)
        
        return shoesArr;
    }

    render() {
        const { shoes } = this.props;
        const { addToCart } = this.props;

        const fetchCartItems = () => {
            const cartItems = this.state.cartItems.map(cartItem => {
                return (
                    <CartItem
                        startNotification={this.startNotification}
                        addToCart={addToCart}
                        animateItems={this.state.animateItems}
                        cartItem={cartItem}
                        key={`${cartItem.id}`}
                    />
                );
            });

            return (
                <ul>
                    {cartItems}
                </ul>
            )
        }

        const cartItems = Object.keys(this.props.shoes).length;
        
        return (
            <div>

                <div className="shoe-index-head">
                    <ShoesHeader
                        cartItems={cartItems}
                        gender={this.props.match.params.gender}
                    />
                </div>

                <div className="shoe">

                    <div className="shoe-index-text">
                        <h2>Wool Runners</h2>

                        <ul className="shoe-category">
                    {
                                this.getShoesByMaterialAndModel('wool', 'runners').map(shoe => (
                                    <ShoeIndexItem
                                        shoe={shoe}
                                        key={shoe.id}
                                        cart={this.state.cart}
                                        currentUser={this.props.currentUser}
                                        updateCartItem={this.props.updateCartItem}
                                     
                                        createCartItem={this.props.createCartItem}
                                        addToCart={this.props.addToCart}
                                        startNotification={this.startNotification}
                                        openModal={this.props.openModal}
                                        closeModal={this.props.closeModal}
                                        cartItem={this.props.cartItems}
                                        history={this.props.history}
                                    />
                                ))
                            }
                        

                        </ul>


                        <br />

                        <h2>Tree Runners</h2>

                        <ul className="shoe-category">
                            {
                                this.getShoesByMaterialAndModel('tree', 'runners').map(shoe => (
                                    <ShoeIndexItem
                                        shoe={shoe}
                                        key={shoe.id}
                                        cart={this.state.cart}
                                        currentUser={this.props.currentUser}
                                        createCartItem={this.props.createCartItem}
                                        addToCart={this.props.addToCart}
                                        startNotification={this.startNotification}
                                        openModal={this.props.openModal}
                                        closeModal={this.props.closeModal}
                                    />
                                ))
                            }

                        </ul>

                        <br />

                        <h2>Wool Loungers</h2>

                        <ul className="shoe-category">
                            {
                                this.getShoesByMaterialAndModel('wool', 'loungers').map(shoe => (
                                    <ShoeIndexItem
                                        shoe={shoe}
                                        key={shoe.id}
                                        cart={this.state.cart}
                                        currentUser={this.props.currentUser}
                                        createCartItem={this.props.createCartItem}
                                        addToCart={this.props.addToCart}
                                        startNotification={this.startNotification}
                                        openModal={this.props.openModal}
                                        closeModal={this.props.closeModal}
                                    />
                                ))
                            }

                        </ul>

                        <br />

                        <h2>Tree Loungers</h2>

                        <ul className="shoe-category">
                            {
                                this.getShoesByMaterialAndModel('tree', 'loungers').map(shoe => (
                                    <ShoeIndexItem
                                        shoe={shoe}
                                        key={shoe.id}
                                        cart={this.state.cart}
                                        currentUser={this.props.currentUser}
                                        createCartItem={this.props.createCartItem}
                                        addToCart={this.props.addToCart}
                                        startNotification={this.startNotification}
                                        openModal={this.props.openModal}
                                        closeModal={this.props.closeModal}
                                    />
                                ))
                            }

                        </ul>

                        <br />

                        <h2>Tree Skippers</h2>

                        <ul className="shoe-category">
                            {
                                this.getShoesByMaterialAndModel('tree', 'skippers').map(shoe => (
                                    <ShoeIndexItem
                                        shoe={shoe}
                                        key={shoe.id}
                                        cart={this.state.cart}
                                        currentUser={this.props.currentUser}
                                        createCartItem={this.props.createCartItem}
                                        addToCart={this.props.addToCart}
                                        startNotification={this.startNotification}
                                        openModal={this.props.openModal}
                                        closeModal={this.props.closeModal}
                                    />
                                ))
                            }

                        </ul>

                        <br />

                        <h2>Tree Toppers</h2>

                        <ul className="shoe-category">
                            {
                                this.getShoesByMaterialAndModel('tree', 'toppers').map(shoe => (
                                    <ShoeIndexItem
                                        shoe={shoe}
                                        key={shoe.id}
                                        cart={this.state.cart}
                                        currentUser={this.props.currentUser}
                                        createCartItem={this.props.createCartItem}
                                        addToCart={this.props.addToCart}
                                        startNotification={this.startNotification}
                                        openModal={this.props.openModal}
                                        closeModal={this.props.closeModal}
                                    />
                                ))
                            }

                        </ul>

                        <br />

                        <h2>Tree Breezers</h2>

                        <ul className="shoe-category">
                            {
                                this.getShoesByMaterialAndModel('tree', 'breezers').map(shoe => (
                                    <ShoeIndexItem
                                        shoe={shoe}
                                        key={shoe.id}
                                        cart={this.state.cart}
                                        currentUser={this.props.currentUser}
                                        createCartItem={this.props.createCartItem}
                                        addToCart={this.props.addToCart}
                                        startNotification={this.startNotification}
                                        openModal={this.props.openModal}
                                        closeModal={this.props.closeModal}
                                    />
                                ))
                            }

                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShoeIndex;


