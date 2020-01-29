import React from 'react';

class CartItem extends React.Component {
    constructor(props) {
        super(props);

       debugger
        this.state = {
           // cartItem: this.props.id,
            cart_id: this.props.cartId,
            shoe_id: this.props.shoeId,
            quantity: this.props.quantity //1
        }

        this.increaseQuantity = this.increaseQuantity.bind(this);
        this.decreaseQuantity = this.decreaseQuantity.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
        // this.handleQuantity = this.handleQuantity.bind(this);
    }

    increaseQuantity() {
        // const quantity = this.state.quantity + 1;
        // this.setState({
        //     quantity: quantity
        // });

        this.setState({ quantity: this.state.quantity + 1}, function () {
            debugger
            this.props.updateCartItem(this.state);
        });

        // this.props.updateQuantity(quantity); //this.props.index
        // this.props.updateCartItem(this.state);
    }

    decreaseQuantity() {
        // let quantity = this.state.quantity;
        // if (quantity > 1) quantity--;
        
        // this.setState({
        //     quantity
        // });
        // debugger
        // this.props.updateQuantity(quantity); //this.props.index
        
        this.setState({ quantity: this.state.quantity - 1 }, function () {
            debugger
            this.props.updateCartItem(this.state);
        });
    }
    

    handleRemoveItem() {
       // debugger
        return (e) => {
            e.preventDefault();
            this.props.deleteCartItem(cartItem)
        }
    }

    // handleQuantity() {
    //     debugger
    //     return (e) => { //e is undefined
    //         this.setState({ quantity: e.target.value }, 
    //             () => this.props.updateCartItem(this.state))
    //     }
    // }

    // showQuantities() {
    //     let final = [];
    //     for (let i = 1; i < 15; i++) {
    //         final.push(<option value={`${i}`} key={i} >{i}</option>)
    //     }
    //     debugger
    //     return final;
    // }

    render() {
        const { quantity } = this.state;
        
        // const { photoUrl, price, size, id, style, deleteCartItem } = this.props;
        const { style, material, gender, color, photoUrl, price, size, cart, cartItem, currentUser } = this.props;
        
        // let { shoe } = this.props;//deconstructing not getting shoe as shoe is not in props
        
        return (
            <div className="cart-item-container">
                <div className="cart-item-image-container">
                    <img className="cart-image" src={photoUrl} alt="shoe" />
                </div>
                <div className="cart-item-info">
                    <div>
                        <h2>{gender} {material} {style} {color}</h2> 
                        <h3>Size : {size}</h3>
                    </div>
                    <div className="quantity-container">
                        <div className="quantity-buttons">
                            <div onClick={this.decreaseQuantity} className="change-quantity">-</div>
                            {/* <select id="quantity-in-cart" value={quantity} onClick={this.handleQuantity}>
                                {this.showQuantities()}
                            </select> */}
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




// class CartItem extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             quantity: 1,
//         };
//         this.increaseQuantity = this.increaseQuantity.bind(this);
//         this.decreaseQuantity = this.decreaseQuantity.bind(this);
//     }

//     increaseQuantity() {
//         const quantity = this.state.quantity + 1;
//         this.setState({
//             quantity
//         });
//         this.props.updateQuantity(this.props.index, quantity);
//     }

//     decreaseQuantity() {
//         let quantity = this.state.quantity;
//         if (quantity > 1) quantity--;
//         this.setState({
//             quantity
//         });
//         this.props.updateQuantity(this.props.index, quantity);
//     }

//     render() {
//         const { quantity } = this.state;
//         const { style, material, gender, color, photoUrl, price, size, cart, cartItem, currentUser } = this.props;
//         const { deleteCartItem } = this.props;
//         debugger

//         return (
//             <div className="cart-item-container">
//                 <div className="cart-item-image-container">
//                     <img className="cart-image" src={photoUrl} alt="shoe" />
//                 </div>
//                 <div className="cart-item-info">
//                     <div>
//                         <h2>{gender}</h2>
//                         <h2>{material}</h2>
//                         <h2>{style}</h2>
//                         <h3>{color}</h3>
//                         <h3>Size : {size}</h3>
//                     </div>
//                     <div className="quantity-container">
//                         <div className="quantity-buttons">
//                             <div onClick={this.decreaseQuantity} className="change-quantity">-</div>
//                             <div className="quantity-integer">{`${quantity}`}</div>
//                             <div onClick={this.increaseQuantity} className="change-quantity">+</div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="cart-item-back-container">
//                     <div className="cart-item-back">
//                         <div onClick={() => deleteCartItem(currentUser, cart, cartItem)} className="exit">&#10005;</div>
//                         <div>${price}</div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }