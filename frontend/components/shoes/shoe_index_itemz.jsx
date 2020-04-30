import React from 'react';

import { Link, withRouter } from 'react-router-dom';

class ShoeIndexItem extends React.Component {
    constructor(props) {
        super(props);

       // debugger
        this.handleClick = this.handleClick.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.compareCartItems = this.compareCartItems.bind(this);
    }

    

    addToCart(idx) { 
        //debugger
        let cartItem = { shoe_id: this.props.shoe.id, cart_id: this.props.cart.id, quantity: 1, size_idx: idx };

        this.props.createCartItem(cartItem) 
            .then(this.props.startNotification())
            .then(this.props.openModal())
    }

    updateCart(quant) {
        //debugger
        let cartItem = { shoe_id: this.props.shoe.id, cart_id: this.props.cart.cart.id, quantity: quant + 1, size_idx: idx }
        this.props.updateCartItem(cartItem)
            .then(this.props.startNotification())
            .then(this.props.openModal())
    }

    compareCartItems() {
        let returned = 0;

        if (this.props.cartItem) {
       
            Object.values(this.props.cartItem).forEach((el) => {
           
                if (el.shoeId === this.props.shoe.id) {
                    if (el.cartId === this.props.cart.cart.id) { 
                        returned = el.quantity;
                    }
                }
            });
        }
        return returned;
    }

    handleClick(idx) { 
        let quant = this.compareCartItems();

        if (quant > 0) {
            this.updateCart(quant, idx)
        } else {
            this.addToCart(idx)
        }
    }

    handleLogin(e) {
        e.preventDefault();
        this.props.history.push('/account/login');
    }

    render() {
    
        const { shoe } = this.props;

        return (
          
            <div
                className={this.props.animateItems ? "item fadeInUp" : "item"}>

                <li className="shoe-index-item">
                    <div className="shoe-image">
                        <img className="shoe-image-item" src={this.props.shoe.photoUrl} alt="" />
                    </div>
                    <Link to={`/shoes/${shoe.gender.toLowerCase()}`}>
                        <div className="shoe-item-color">
                            <h3>{shoe.color}</h3>
                            <br />
                        </div>
                        <div className="shoe-item-content">
                            <h3>{"$95 "}</h3>
                            <h3>{shoe.gender + " "}</h3>
                            <h3>{shoe.material + " "}</h3>
                            <h3>{shoe.style}</h3>
                            <br />
                        </div>
                        <ol className="size-selections-container">
                  
                            <li className="size" onClick={(e) => this.props.currentUser ? this.handleClick(0) : this.handleLogin(e)}><h4>7</h4></li>
                            <li className="size" onClick={(e) => this.props.currentUser ? this.handleClick(1) : this.handleLogin(e)}><h4>8</h4></li>
                            <li className="size" onClick={(e) => this.props.currentUser ? this.handleClick(2) : this.handleLogin(e)}><h4>9</h4></li>
                            <li className="size" onClick={(e) => this.props.currentUser ? this.handleClick(3) : this.handleLogin(e)}><h4>10</h4></li>
                            <li className="size" onClick={(e) => this.props.currentUser ? this.handleClick(4) : this.handleLogin(e)}><h4>11</h4></li>
                            <li className="size" onClick={(e) => this.props.currentUser ? this.handleClick(5) : this.handleLogin(e)}><h4>12</h4></li>
    
                        </ol>
                    </Link>
                </li>
            </div>
        );
    }
}
export default withRouter(ShoeIndexItem);

