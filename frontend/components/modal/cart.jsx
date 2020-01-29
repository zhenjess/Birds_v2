import React from 'react';

import { Link, withRouter } from 'react-router-dom';

import CartItem from './cart_item';

import { deleteCartItem, deleteCartItems, updateCartItem } from '../../util/cart_items_api_util';

import ShoeIndex from '../shoes/shoe_index';

import ShoeIndexContainer from '../shoes/shoe_index_container';



class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            processed: false,
            subtotal: 0,
            quantity: {}, //item_id: value
            //numItems: 0,
            animateNotification: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleMenModalClick = this.handleMenModalClick.bind(this);
        this.handleWomenModalClick = this.handleWomenModalClick.bind(this);
        // this.updateQuantity = this.updateQuantity.bind(this);
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
        // this.props.fetchAllShoes();
        
        this.props.fetchCartItems(this.props.cart); 
        
        const { cartItems } = this.props;
        if (cartItems.length) {
            this.props.openModal('shoe index', this.props.cart);
            let subtotal = 0;
            let items = Object.values(cartItems);
            let i = 0;
            while (i < items.length) {
                subtotal += (95 * items[i]["quantity"]);
                i++;
            }
            
            this.setState({ subtotal });
        }
        // if (cartItems.length) {
        //     this.props.openModal('shoe index', this.props.cart);
        //     //set default value of reduce to 0 to not add the first obj ele which is an obj
        //     const subtotal = cartItems.reduce((total, cartItem) => 95 + total, 0);
        //     this.setState({
        //         subtotal
        //     });

        
        // }
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
        //return total based on pairs of cartItems in cart
    
        let totalCount = 0;
    
        debugger
        for (let i = 0; i < cartItems.length; i++) {
            totalCount += cartItems[i]["quantity"];
        }
        return totalCount;
    }

    componentDidUpdate(prevProps, prevState) {
        const { cartItems } = this.props;
        let prevCount = this.quantityCount(prevProps.cartItems); //don't want length of cartItems just entire cartItems
        let currCount = this.quantityCount(this.props.cartItems);
        
        debugger
        if (prevCount !== currCount) { //cartItems.length !== prevProps.cartItems.length
            
            // let subtotal = 0;

            // cartItems.forEach(cartItem => {  // pair1->10 pair2->1 pair3->5 ==> 16 pairs of shoes, cartItems => 3 in length 
               
            //    subtotal += (95 * cartItem["quantity"]); //this works if have shoe and accessories items to keep track of the diff pricings
               
            // });
            let subtotal = currCount * 95; //specific to if have only shoe items
            this.setState({ subtotal });

            const quantity = Array.from(this.state.quantity);
            quantity.push(1);
            this.setState({ quantity });
        }
    }

    handleCheckout() {
        return (e) => {
            e.preventDefault();

            if (this.props.currentUser) {
                debugger
                this.props.deleteCartItems(this.props.checkoutItems);
                this.props.openModal("checkout");
            }
        }
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
       // debugger
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
        cartItems.forEach(cartItem => deleteCartItem(currentUser, cartItem.id, this.props.cart.cart.id));
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

    handleMenModalClick() {
        this.props.history.push('/shoes/men')
        this.props.closeModal()
    }

    handleWomenModalClick() {
        this.props.history.push('/shoes/women')
        this.props.closeModal()
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
                size={cartItem.size.size}
                id={cartItem.id}
                key={`${cartItem.id}-${cartItem.size.size}`}
                index={i}
                // updateQuantity={this.updateQuantity}
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
                            <style>
                                @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans:700&display=swap');
                            </style>
                            <div onClick={this.handleMenModalClick} className="shop-link" >
                                <input
                                    type="submit"
                                    className="submit"
                                    value="SHOP MEN"
                                />
                            </div>
                            <div onClick={this.handleWomenModalClick} className="shop-link">
                                <input
                                    type="submit"
                                    className="submit"
                                    value="SHOP WOMEN"
                                />
                            </div>

                        </div>

                    </div>

                );
            } else {
            // debugger
            return (
                <div>
                    {/* <div onAnimationEnd={this.endNotification} className={this.state.animateNotification ? "fadeout notification" : "notification"}>Thank you for your purchase!</div>    */}
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
                            <div onClick={this.props.closeModal} className="cart-close-button">&#10005;</div>
                        </div>
                        <ul className="cart-items">
                            {/* {cartItems} */}
                            {this.props.cartItems.map((cartItem, i) => {
                                // debugger
                                // const {id, quantity, cart_id, photoUrl, shoe_id} = item;
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
                                        size={cartItem.size.size}
                                        id={cartItem.id}
                                        key={`${cartItem.id}-${cartItem.size.size}`}
                                        index={i}
                                        // updateQuantity={this.updateQuantity}
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
                            {/* onClick={this.emptyCart} */}
                            <Link className="checkout" onClick={this.props.closeModal} to={"/cart"}>
                                <input
                                    type="submit"
                                    className="submit"
                                    value="CHECKOUT"
                                />
                            </Link>

                        </div>
                        <div className="cart-footer">
                            <p>Looking for more shoes?</p>
                            &nbsp;
                            &nbsp;
                            <div className="footer-links">
                                <p>Shop&nbsp;<Link className="shopping-link" onClick={this.handleWomenModalClick} to={'/shoes/women'}>Women</Link></p>
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                <p>Shop&nbsp;<Link className="shopping-link" onClick={this.handleMenModalClick} to={'/shoes/men'}>Men</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default withRouter(Cart);


    // render() {
    //     let { currentUser, cartItems, shoes, updateCartItem, deleteCartItem, openModal } = this.props;
    //     const { subtotal } = this.state;

    //     const cartItems = cartItems.map((cartItem, idx) => {
    //         return <CartItem
    //             cartItem={cartItem}
    //             key={`${cartItem.id}-${cartItem.size}`}
    //             index={idx}
    //             updateQuantity={this.updateQuantity}
    //             deleteCartItem={deleteCartItem}
    //         />
    //     });

    //     let cartItemsInCart;

    //     if (currentUser) {
    //         if (cartItems.length === 0) {
    //             cartItemsInCart = (

    //                 <div className="cart-form">
    //                     <div className="shop-links">
    //                         <div className="cart-text">
    //                             <div className="cart-img"><i className="fas fa-shopping-cart"></i></div>
    //                             <p>You're $50 away from free shipping</p>
    //                         </div>
    //                         <br />
    //                         <p>Your Cart is Empty</p>
    //                         <style>
    //                             @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans:700&display=swap');
    //                         </style>
    //                         <div onClick={this.handleMenModalClick} className="shop-link" >
    //                             <input
    //                                 type="submit"
    //                                 className="submit"
    //                                 value="SHOP MEN"
    //                             />
    //                         </div>
    //                         <div onClick={this.handleWomenModalClick} className="shop-link">
    //                             <input
    //                                 type="submit"
    //                                 className="submit"
    //                                 value="SHOP WOMEN"
    //                             />
    //                         </div>

    //                     </div>

    //                 </div>

    //             )
    //         } else {
    //             cartItemsInCart = (
    //                 cartItems.map((cartItem) => {
    //                     return (
    //                         <CartItem
    //                             shoe={ shoes[cartItem.shoe_id] }
    //                             shoeId={ cartItem.shoeId }
    //                             cartItemId={cartItem.id}
    //                             key={`${cartItem.id}-${cartItem.size.size}`}
    //                             quantity={ cartItem.quantity }
    //                             photoUrl={cartItem.photoUrl}
    //                             price={95}
    //                             size={cartItem.size.size}          
    //                             style={cartItem.style.style}                   
    //                             updateCartItem={updateCartItem}
    //                             deleteCartItem={deleteCartItem}
    //                             closeModal={closeModal}
    //                         />
    //                     );
    //                 })
    //             )
    //         }
    //     }
        
    //     let subTotal = 0;
    //     let numCartItems = 0;

    //     cartItems.forEach((cartItem) => {
    //         if (!shoes[cartItem.shoe_id]) {
    //             return null;
    //         }
    //         subTotal += (95 * cartItem.quantity);
    //         numCartItems += cartItem.quantity;
    //     })

    //     return (
    //         <div>
    //             {/* <div onAnimationEnd={this.endNotification} className={this.state.animateNotification ? "fadeout notification" : "notification"}>Thank you for your purchase!</div>    */}
    //             <div className="cart-upper-conatiner">
    //                 <div className="cart-header">
    //                     <h2>CART</h2>
    //                     &nbsp;
    //                     &nbsp;
    //                     &nbsp;
    //                     &nbsp;
    //                         <div className="cart-img"><i className="fas fa-shopping-cart"></i></div>
    //                     &nbsp;
    //                     &nbsp;
    //                     &nbsp;
    //                     &nbsp;
    //                         <div onClick={this.props.closeModal} className="cart-close-button">&#10005;</div>
    //                 </div>
    //                 { cartItemsInCart }
    //             </div>
    //             <div>
    //                 <div className="cart-totals">
    //                     <div className="cart-costs">
    //                         <h3>Subtotal</h3>
    //                         <h3>${subTotal}</h3>
    //                     </div>
    //                     <div className="cart-costs">
    //                         <h3>Shipping</h3>
    //                         <h3>FREE</h3>
    //                     </div>
    //                     {/* onClick={this.emptyCart} */}
    //                     <Link className="checkout" onClick={this.props.closeModal} to={"/cart"}>
    //                         <input
    //                             type="submit"
    //                             className="submit"
    //                             value="CHECKOUT"
    //                         />
    //                     </Link>

    //                 </div>
    //                 <div className="cart-footer">
    //                     <p>Looking for more shoes?</p>
    //                     &nbsp;
    //                     &nbsp;
    //                     <div className="footer-links">
    //                         <p>Shop&nbsp;<Link className="shopping-link" onClick={this.handleWomenModalClick} to={'/shoes/women'}>Women</Link></p>
    //                         &nbsp;
    //                         &nbsp;
    //                         &nbsp;
    //                         &nbsp;
    //                         &nbsp;
    //                             <p>Shop&nbsp;<Link className="shopping-link" onClick={this.handleMenModalClick} to={'/shoes/men'}>Men</Link></p>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     );

    // }




// // <div className={open ? "cart-page-container open-cart" : "cart-page-container closed-cart"}>
            //     <div onAnimationEnd={this.endNotification} className={this.state.animateNotification ? "fadeout notification" : "notification"}>Thank you for your purchase!</div>
            //     {/* <div className={open ? "cart-container in-front open-container" : "cart-container closed-cart"}>
            //         <div className={open ? "overlay-visible open-cart" : "closed-cart"}></div>
            //         <div className={open ? "cart-sidebar in-front" : "cart-sidebar closed-cart"}> */}
            //             <div className="cart-upper-conatiner">
            //                 <div className="cart-header">
            //                     <h2>CART</h2>
            //                     <div className="cart-img"><i className="fas fa-shopping-cart"></i></div>
            //                     {/* <div onClick={handleOpenCart} className="cart-close-button">&#10005;</div> */}
            //                 </div>
            //                 <ul className="cart-items">
            //                     {cartItems}
            //                 </ul>
            //             </div>
            //             <div>
            //                 <div className="divider">Looking for something else?
            //                         &nbsp;
            //                 {/* <Link onClick={handleOpenCart} className="shopping-link" to={'/shoes/women'}>Shop Women</Link>
            //                     <Link onClick={handleOpenCart} className="shopping-link" to={'/shoes/men'}>Shop Men</Link> */}
            //                 </div>
            //                 <div className="cart-totals">
            //                     <div className="cart-costs">
            //                         <h3>Subtotal</h3>
            //                         <div>${subtotal}</div>
            //                     </div>
            //                     <div className="cart-costs">
            //                         <h3>Shipping</h3>
            //                         <div>FREE</div>
            //                     </div>
            //                     <input onClick={this.emptyCart} className="cart-button" type="button" value="CHECKOUT" />
            //                 </div>
            //                 <div className="cart-footer">
            //                     <p>Looking for more shoes?</p>&nbsp;
            //                     <p>Click<Link className="shopping-link" onClick={this.handleWomenModalClick} to={'/shoes/women'}>here for Women</Link></p>
            //                     <p>Click<Link className="shopping-link" onClick={this.handleMenModalClick} to={'/shoes/men'}>here for Men</Link></p>
            //                 </div>
            //             </div>
            //         // </div>
            //     // </div>
            // // </div>  


// render() {
//     const { open, cartItems, deleteCartItem } = this.props;
//     const { subtotal } = this.state;
//     cartItems.map((item, i) => {
//         const {id, quantity, cart_id, photoUrl, shoe_id} = item;
//         return <CartItem
//             // model={item.model}
//             // material={item.material}
//             // gender={item.gender}
//             // color={item.color}
//             photoUrl={item.photoUrl}
//             price={95}
//             // size={item.size}
//             id={item.id}
//             key={`${item.id}-${item.size}`}
//             index={i}
//             updateQuantity={this.updateQuantity}
//             removeFromCart={removeFromCart}
//         />
//         // return <CartItem 
//         //     id={id}
//         //     quantity={quantity}
//         //     cart_id={cart_id}
//         //     photoUrl={photoUrl}
//         //     shoe_id={shoe_id}
//         // />
//     });




//     if (cartItems.length === 0) {
//         return (
//             <div className="cart-form">
//                 <div className="shop-links">
//                     <div className="cart-text">
//                         <div className="cart-img"><i className="fas fa-shopping-cart"></i></div>
//                         <p>You're $50 away from free shipping</p>
//                     </div>
//                     <br />
//                     <p>Your Cart is Empty</p>
//                     <style>
//                         @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans:700&display=swap');
//                     </style>
//                     <div onClick={this.handleMenModalClick} className="shop-link" >
//                         <input
//                             type="submit"
//                             className="submit"
//                             value="SHOP MEN"
//                         />
//                     </div>
//                     <div onClick={this.handleWomenModalClick} className="shop-link">
//                         <input
//                             type="submit"
//                             className="submit"
//                             value="SHOP WOMEN"
//                         />
//                     </div>

//                 </div>

//             </div>

//         );
//     } else {
//         // debugger
//         return (
//             <div>
//                 {/* <div onAnimationEnd={this.endNotification} className={this.state.animateNotification ? "fadeout notification" : "notification"}>Thank you for your purchase!</div>    */}
//                 <div className="cart-upper-conatiner">
//                     <div className="cart-header">
//                         <h2>CART</h2>
//                         &nbsp;
//                         &nbsp;
//                         &nbsp;
//                         &nbsp;
//                             <div className="cart-img"><i className="fas fa-shopping-cart"></i></div>
//                         &nbsp;
//                         &nbsp;
//                         &nbsp;
//                         &nbsp;
//                             <div onClick={this.props.closeModal} className="cart-close-button">&#10005;</div>
//                     </div>
//                     <ul className="cart-items">
//                         {/* {cartItems} */}
//                         {cartItems.map((item, i) => {
//                             debugger
//                             // const {id, quantity, cart_id, photoUrl, shoe_id} = item;
//                             return (
//                                 <CartItem
//                                     photoUrl={item.photoUrl}
//                                     price={95}
//                                     size={item.size.size}
//                                     id={item.id}
//                                     style={item.style.style}
//                                     key={`${item.id}-${item.size.size}`}
//                                     // index={i}
//                                     updateQuantity={this.updateQuantity}
//                                     deleteCartItem={deleteCartItem}
//                                 />)
//                         })}
//                     </ul>
//                 </div>
//                 <div>
//                     <div className="cart-totals">
//                         <div className="cart-costs">
//                             <h3>Subtotal</h3>
//                             <h3>${subtotal}</h3>
//                         </div>
//                         <div className="cart-costs">
//                             <h3>Shipping</h3>
//                             <h3>FREE</h3>
//                         </div>
//                         {/* onClick={this.emptyCart} */}
//                         <Link className="checkout" onClick={this.props.closeModal} to={"/cart"}>
//                             <input
//                                 type="submit"
//                                 className="submit"
//                                 value="CHECKOUT"
//                             />
//                         </Link>

//                     </div>
//                     <div className="cart-footer">
//                         <p>Looking for more shoes?</p>
//                         &nbsp;
//                         &nbsp;
//                             <div className="footer-links">
//                             <p>Shop&nbsp;<Link className="shopping-link" onClick={this.handleWomenModalClick} to={'/shoes/women'}>Women</Link></p>
//                             &nbsp;
//                             &nbsp;
//                             &nbsp;
//                             &nbsp;
//                             &nbsp;
//                                 <p>Shop&nbsp;<Link className="shopping-link" onClick={this.handleMenModalClick} to={'/shoes/men'}>Men</Link></p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }