import React from 'react';

class CartItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cart_id: this.props.cartId,
            shoe_id: this.props.shoeId,
            quantity: this.props.quantity 
        }

        this.increaseQuantity = this.increaseQuantity.bind(this);
        this.decreaseQuantity = this.decreaseQuantity.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
    }

    increaseQuantity() {

        this.setState({ quantity: this.state.quantity + 1}, function () {
            this.props.updateCartItem(this.state);
        });
    }

    decreaseQuantity() {
 
        this.setState({ quantity: this.state.quantity - 1 }, function () {
            this.props.updateCartItem(this.state);
        });
    }
    

    handleRemoveItem() {
        return (e) => {
            e.preventDefault();
            this.props.deleteCartItem(cartItem)
        }
    }

    render() {
        const { quantity } = this.state;
        
        const { style, material, gender, color, photoUrl, price, size, id, deleteCartItem, cartItem, currentUser } = this.props;

        return (
            <div className="cart-item-container">
                <div className="cart-item-image-container">
                    <img className="cart-image" src={photoUrl} alt="shoe" />
                </div>
                <div className="cart-item-info">
                    <div>
                        <h2>{gender} {color} {material} {style}</h2>       
                        <h3>Size : {size}</h3> 
                
                    </div>
                    <div className="quantity-container">
                        <div className="quantity-buttons">
                            <div onClick={this.decreaseQuantity} className="change-quantity">-</div>
                            <div className="quantity-integer">{`${quantity}`}</div>
                            <div onClick={this.increaseQuantity} className="change-quantity">+</div>
                        </div>
                    </div>
                </div>
                <div className="cart-item-back-container">
                    <div className="cart-item-back">
                        
                        <div onClick={() => deleteCartItem(id)} className="exit">&#10005;</div>
                        <div>${price}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartItem;

