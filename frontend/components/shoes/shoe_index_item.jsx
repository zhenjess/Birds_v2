import React from 'react';

import ShoesHeader from './shoes_header';

import { hashHistory } from 'react-router';

import { Link, Redirect, withRouter } from 'react-router-dom';

class ShoeIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.compareCartItems = this.compareCartItems.bind(this)

    }

    // componentWillUnmount() {
    //     window.scrollTo(0, 0);
    // }

    addToCart() {

        // addToCart(shoe) {
        //     debugger
        //     let cartItem = { shoe_id: shoe.id, cart_id: this.props.cart.cart.id, quantity: 1};
        //     this.props.createCartItem(this.props.currentUser, cartItem);
        // }
        let cartItem = { shoe_id: this.props.shoe.id, cart_id: this.props.currentUser.cartId, quantity: 1 };
        debugger

        this.props.createCartItem(cartItem) //this.props.currentUser, 
            .then(this.props.startNotification())
            .then(this.props.openModal())
    }

    updateCart(quant) {
        // let quantity = 1;

        // if (cartItem) {
        //     quantity += 1;
        // } else {

        // }

        let cartItem = { shoe_id: this.props.shoe.id, cart_id: this.props.cart.cart.id, quantity: quant + 1 }
        this.props.updateCartItem(cartItem)
            .then(this.props.startNotification())
            .then(this.props.openModal())


    }

    compareCartItems() {
        let returned = 0;

        if (this.props.cartItem) {
            // debugger
            // debugger
            Object.values(this.props.cartItem).forEach((el) => {
                //    debugger
                if (el.shoeId === this.props.shoe.id) {
                    if (el.cartId === this.props.cart.cart.id) { //this.props.currentUser.cartId should not matching with user's id, but with user's cart id
                        returned = el.quantity;
                    }
                }
            });
        }
        return returned;
    }

    handleClick() { //cart item should exist and be passed in
        //debugger
        let quant = this.compareCartItems();

        // if (currentUser) {
        // } else {
        //     // debugger
        //     <Redirect to={"/account/login"}></Redirect>
        // }
        //debugger
        if (quant > 0) {
            //debugger
            this.updateCart(quant)
        } else {
            this.addToCart()
        }

        // this.props.startNotification();
        // this.props.openModal();
        // this.props.addToCart(id, size);
    }

    handleLogin(e) {
        e.preventDefault();
        //debugger
        this.props.history.push('/account/login');
    }

    render() {
        //debugger
        // const { shoe_id, cart_id, quantity } = this.props.cartItem;
        const { shoe, cartItem, addToCart, currentUser } = this.props;

        return (
            // <div onAnimationEnd={this.state.clearGlobalAnimations}
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
                            {/* <h3>{shoe.size}</h3> */}
                        </div>
                        <ol className="size-selections-container">
                            {/* <li onClick={this.handleClick} className="size"><h4>7</h4></li> */}
                            {/* <li onClick={this.handleClick} className="size"><h4>7</h4></li>
                            <li onClick={this.handleClick} className="size"><h4>8</h4></li>
                            <li onClick={this.handleClick} className="size"><h4>9</h4></li>
                            <li onClick={this.handleClick} className="size"><h4>10</h4></li>
                            <li onClick={this.handleClick} className="size"><h4>11</h4></li>
                            <li onClick={this.handleClick} className="size"><h4>12</h4></li> */}
                            <li className="size" onClick={(e) => this.props.currentUser ? this.handleClick() : this.handleLogin(e)}><h4>7</h4></li>
                            <li className="size" onClick={(e) => this.props.currentUser ? this.handleClick() : this.handleLogin(e)}><h4>8</h4></li>
                            <li className="size" onClick={(e) => this.props.currentUser ? this.handleClick() : this.handleLogin(e)}><h4>9</h4></li>
                            <li className="size" onClick={(e) => this.props.currentUser ? this.handleClick() : this.handleLogin(e)}><h4>10</h4></li>
                            <li className="size" onClick={(e) => this.props.currentUser ? this.handleClick() : this.handleLogin(e)}><h4>11</h4></li>
                            <li className="size" onClick={(e) => this.props.currentUser ? this.handleClick() : this.handleLogin(e)}><h4>12</h4></li>
                          
                            {/* <li onClick={currentUser ? () => this.handleClick(shoe) : () => <Link to={"/account"}></Link>} className="size"><h4>7</h4></li> */}
                            {/* <li onClick={() => this.handleClick(shoe)} className="size"><h4>7</h4></li>
                            <li onClick={() => this.handleClick(shoe)} className="size"><h4>8</h4></li>
                            <li onClick={() => this.handleClick(shoe)} className="size"><h4>9</h4></li>
                            <li onClick={() => this.handleClick(shoe)} className="size"><h4>10</h4></li>
                            <li onClick={() => this.handleClick(shoe)} className="size"><h4>11</h4></li>
                            <li onClick={() => this.handleClick(shoe)} className="size"><h4>12</h4></li> */}
                        </ol>
                    </Link>
                </li>
            </div>
        );
    }
}
export default withRouter(ShoeIndexItem);



// import React from 'react';

// import ShoesHeader from './shoes_header';

// import { Link } from 'react-router-dom';

// class ShoeIndexItem extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             shoe_id: null,
//             quantity: 1
//         }

//         this.handleClick = this.handleClick.bind(this);
//         this.addToCart = this.addToCart.bind(this);
//     }


//     componentDidMount() {
//         this.setState({ shoe_id: parseInt(this.props.shoe.id), quantity: 1 }, () => {
//             console.log(this.state.shoe_id)
//         })
//     }

//     addToCart() {
//         let cartItem = { shoe_id: this.props.shoe.id, cart_id: this.props.cart.cart.id, quantity: 1 };
//         this.props.createCartItem(this.props.currentUser, cartItem);
//     }

//     handleClick(shoe) {
//         return () => {
//             // this.props.createCartItem(this.state)
//             //     .then(console.log(this.state));
//             this.addToCart(); //shoe
//             this.props.startNotification();
//             this.props.openModal(modal);
//         }
//     }

//     render() {
//         const { shoe, currentUser, cartItem, addToCart } = this.props;

//         return (
//             // <div onAnimationEnd={this.state.clearGlobalAnimations}
//             <div
//                 className={this.props.animateItems ? "item fadeInUp" : "item"}>

//                 <li className="shoe-index-item">
//                     <div className="shoe-image">
//                         <img className="shoe-image-item" src={this.props.shoe.photoUrl} alt="" />
//                     </div>
//                     <Link to={`/shoes/${shoe.gender.toLowerCase()}`}>
//                         <div className="shoe-item-color">
//                             <h3>{shoe.color}</h3>
//                             <br />
//                         </div>
//                         <div className="shoe-item-content">
//                             <h3>{"$95 "}</h3>
//                             <h3>{shoe.gender + " "}</h3>
//                             <h3>{shoe.material + " "}</h3>
//                             <h3>{shoe.style}</h3>
//                             <br />
//                             {/* <h3>{shoe.size}</h3> */}
//                         </div>

//                         {/* <a href="?" className="icon-button cart-button" ><i className="far fa-question-circle icon"></i></a> */}
//                         <ol className="size-selections-container"> 
//                             <li onClick={currentUser ? () => this.handleClick(shoe) : () => <Link to={"/account"}></Link>} className="size"><h4>7</h4></li>
//                             <li onClick={currentUser ? () => this.handleClick(shoe) : () => <Link to={"/account"}></Link>} className="size"><h4>8</h4></li>
//                             <li onClick={currentUser ? () => this.handleClick(shoe) : () => <Link to={"/account"}></Link>} className="size"><h4>9</h4></li>
//                             <li onClick={currentUser ? () => this.handleClick(shoe) : () => <Link to={"/account"}></Link>} className="size"><h4>10</h4></li>
//                             <li onClick={currentUser ? () => this.handleClick(shoe) : () => <Link to={"/account"}></Link>} className="size"><h4>11</h4></li>
//                             <li onClick={currentUser ? () => this.handleClick(shoe) : () => <Link to={"/account"}></Link>} className="size"><h4>12</h4></li>
//                         </ol>
//                     </Link>
//                 </li>
//             </div>
//         );

//     }
// }

// export default ShoeIndexItem;

// class ShoeIndexItem extends React.Component {
//     constructor(props) {
//         super(props);

//         this.handleClick = this.handleClick.bind(this);
//         this.addToCart = this.addToCart.bind(this);

//     }

//     // addToCart(shoe) {
//     //     debugger
//     //     let cartItem = { shoe_id: shoe.id, cart_id: this.props.cart.cart.id, quantity: 1};
//     //     this.props.createCartItem(this.props.currentUser, cartItem);
//     // }

//     addToCart(shoe) {
//         // debugger
//          let cartItem = { shoe_id: this.props.shoe.id, cart_id: this.props.cart.cart.id, quantity: 1 };
//         this.props.createCartItem(this.props.currentUser, cartItem);
//     }

//     handleClick(shoe) { //cart item should exist and be passed in
//         this.addToCart(shoe);
//         this.props.startNotification();
//         this.props.openModal();
//         // this.props.addToCart(id, size);
//     }

//     render() {
//         //debugger
//         // const { shoe_id, cart_id, quantity } = this.props.cartItem;
//         const { shoe, cartItem, addToCart } = this.props;

//         return (
//             // <div onAnimationEnd={this.state.clearGlobalAnimations}
//             <div
//                  className={this.props.animateItems ? "item fadeInUp" : "item"}>

//                 <li className="shoe-index-item">
//                     <div className="shoe-image">
//                         <img className="shoe-image-item" src={this.props.shoe.photoUrl} alt="" />
//                     </div>
//                     <Link to={`/shoe/${shoe.id}`}>
//                         <div className="shoe-item-color">
//                             <h3>{shoe.color}</h3>
//                             <br />
//                         </div>
//                         <div className="shoe-item-content">
//                             <h3>{"$95 "}</h3>
//                             <h3>{shoe.gender + " "}</h3>
//                             <h3>{shoe.material + " "}</h3>
//                             <h3>{shoe.style}</h3>
//                             <br />
//                             {/* <h3>{shoe.size}</h3> */}
//                         </div>
//                         <ol className="size-selections-container">
//                             <li onClick={() => this.handleClick(shoe)} className="size"><h4>7</h4></li>
//                             <li onClick={() => this.handleClick(shoe)} className="size"><h4>8</h4></li>
//                             <li onClick={() => this.handleClick(shoe)} className="size"><h4>9</h4></li>
//                             <li onClick={() => this.handleClick(shoe)} className="size"><h4>10</h4></li>
//                             <li onClick={() => this.handleClick(shoe)} className="size"><h4>11</h4></li>
//                             <li onClick={() => this.handleClick(shoe)} className="size"><h4>12</h4></li>
//                         </ol>
//                     </Link>
//                 </li>
//             </div>
//         );
//     }
// }
// export default ShoeIndexItem;

// const ShoeIndexItem = ({ shoe }) => (

//     <li className="shoe-index-item">
//         <div className="shoe-image"> 
//                 <img id="1" className="grey-shoe" src={shoe.photoUrl} alt=""/>

//                 {/* <img id="2" className="black-shoe" src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/Men_s_Wool_Runners_-_Natural_Black__Black_Sole__-_imageLeft.png?v=1571655678" alt="" /> */}

//             {/* <div className="shoe-image-2">
//                 <img src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/Men_s_Wool_Runners_-_Natural_Black__Black_Sole__-_imageLeft.png?v=1571655678" alt="" />
//             </div>

//             <div className="shoe-image-3">
//                 <img src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/Allbirds_M_Wool_Runner_Kotare_WHITE_PROFILEL_bc9201bb-1f0d-4888-9297-92d99f97bc8c.png?v=1571655678" alt="" />
//             </div>

//             <div className="shoe-image-4">
//                 <img src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/Allbirds_August_ReFresh_WL_RN_Tuke_Jam_LAT_7eebfa07-e157-4412-a566-473dc39d7d52.png?v=1571655678" alt="" />
//             </div>

//             <div className="shoe-image-5">
//                 <img src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/Allbirds_WL_RN_Tuke_Matcha_LAT_47d9d30a-30e2-4068-955b-b51370492355.png?v=1571655678" alt="" />
//             </div>

//             <div className="shoe-image-6">
//                 <img src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/Allbirds_FY19_August_PDP_WL_RN_Savanna_Night_LAT_9dbb2f9d-8a67-4fcc-a0fe-1bcc2a28e2eb.png?v=1571655947" alt="" />
//             </div> */}
//         </div>

//         <Link to={`/shoe/${shoe.id}`}>
//             {/* <span>{shoe.id}</span>  */}
//             <span>{shoe.color}</span>
//             <br/> 
//             <span>{"$95 "}</span>
//             <span>{shoe.gender + " "}</span>
//             <span>{shoe.material + " "}</span>
//             <span>{shoe.model}</span>
//             <br/>
//             <span>{shoe.size}</span>
//             <ol className="size-selections-container">
//                 <li onClick={() => this.handleClick(shoe, 7)} className="size"><h4>7</h4></li>
//                 <li onClick={() => this.handleClick(shoe, 8)} className="size"><h4>8</h4></li>
//                 <li onClick={() => this.handleClick(shoe, 19)} className="size"><h4>9</h4></li>
//                 <li onClick={() => this.handleClick(shoe, 10)} className="size"><h4>10</h4></li>
//                 <li onClick={() => this.handleClick(shoe, 11)} className="size"><h4>11</h4></li>
//                 <li onClick={() => this.handleClick(shoe, 12)} className="size"><h4>12</h4></li>
//             </ol>
//         </Link>
//     </li>

// );

// export default ShoeIndexItem;


// const ShoeIndexItem = props => (
//     <li>
//         <Link to={`/shoes/${props.shoe.id}`}>{props.shoe.gender, props.shoe.model}</Link>
//     </li>
// );

// export default ShoeIndexItem;