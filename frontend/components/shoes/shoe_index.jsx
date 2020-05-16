import React from 'react';
import { Route } from 'react-router-dom';
import ShoeIndexItem from './shoe_index_item';
import CartItem from '../modal/cart_item';
import ShoesHeader from './shoes_header';

class ShoeIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldAnimate: false,
            animateItems: true,
            animateNotification: false,
            cart: {},
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

    render() {
        const { shoes, addToCart } = this.props;
        
        const fetchCartItems = () => {
            const cartItems = this.state.cartItems.map(cartItem => {
                return (
                    <CartItem
                        startNotification={this.startNotification}
                        animateItems={this.state.animateItems}
                        addToCart={addToCart}
                        cartItem={cartItem}
                        key={`${cartItem.id}`}
                    />
                );
            });
            return (
                <ul>
                    {cartItems}
                </ul>
            );
        };

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
                                
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShoeIndex;