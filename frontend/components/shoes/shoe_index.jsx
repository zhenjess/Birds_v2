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
        // this.clearGlobalAnimations = this.clearGlobalAnimations.bind(this);
        this.startNotification = this.startNotification.bind(this);
        this.endNotification = this.endNotification.bind(this);
    }

    componentWillUnmount() {
        window.scrollTo(0, 0);
    }

    componentDidMount() {
        // debugger
        const id = this.props.match.params.id;

        // this.props.fetchCartItems(id).then((data) => {
        //     this.setState({
        //         items: Object.values(data.items)
        //     });
        // });

        // this.props.fetchShoe(shoeId).then((data) => {
        //     this.setState({
        //         shoes: Object.values(data.shoes),
        //     });
        // });

        this.props.fetchAllShoes();

        if (this.props.currentUser) {
            this.props.fetchCart(this.props.currentUser.id).then((cart) => { //this.props.cartId
                this.setState({
                   cart: cart
                });
            });
        }
    }

    componentDidUpdate(prevProp) {
        const id = this.props.match.params.id;
        if (this.props.location.pathname !== prevProp.location.pathname) {
            // this.props.fetchCartItems(id).then((data) => {
            //     this.setState({
            //         items: Object.values(data.items),
            //     });
            // });
        }
    }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         filterAttributes: {
    //             filterId: "",
    //             filterMaterial: "", 
    //             filterModel: ""
    //         }
    //     }
    //     this.filterShoes = this.filterShoes.bind(this);
    // }

    // filterShoes() {
    //     this.setState((state, props) => {
    //         const filters = state.filters;
    //         const shoes = props.shoes;
    //         const filteredShoes = shoes.filter(shoe => {
    //             return Object.keys(filters).every(key => filters[key] === item[key]);
    //         });

    //         return ({
    //             shoes: filteredShoes
    //         });
    //     });
    // }

    // render() {
    //     if (!this.props.shoes) {
    //         return null;
    //     }
    //     // debugger
    //     return (

    //         <section className="shoe"> 
    //             {this.props.shoes.map((ele)=> {
    //                 return(
    //                 <>
    //                     <h1>{ele.model}</h1>
    //                     <h1>{ele.gender}</h1>
    //                 </>
    //                 );
    //             })}
    //         </section>
    //     );
    // }

    handleAnimationEnd() {
        this.setState({ shouldAnimate: false });
    }

    // clearGlobalAnimations() {
    //     this.setState({animateItems: false});
    // }

    startNotification() {
        this.setState({ animateNotification: true });
    }

    endNotification() {
        this.setState({ animateNotification: false });
    }

    getShoesByMaterialAndModel(material, style) {
        let shoesArr = this.props.shoes.filter(shoe => shoe.style.toLowerCase() === style && shoe.material.toLowerCase() === material)
        //debugger
        return shoesArr;
    }

    // getShoesByColor(hue) {
    //     let shoesArray = this.props.shoes.filter(shoe => shoe.hue.toLowerCase() === hue)

    //     return shoesArray;
    // }

    render() {
        const { shoes } = this.props;
        const { addToCart } = this.props;
        // const filterAttrs = this.state.filterAttributes;
        // const { filterName, filterId, filterOptions } = filterAttrs;
        // debugger

        const fetchCartItems = () => {
            const cartItems = this.state.cartItems.map(cartItem => {
                return (
                    <CartItem
                        startNotification={this.startNotification}
                        addToCart={addToCart}
                        // clearGlobalAnimations={this.clearGlobalAnimations}
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

        // const items = this.props.shoes.length ? fetchItems() : ""; //(<div>Fetching Birds...</div>)
       // debugger
        const cartItems = Object.keys(this.props.shoes).length;
        
        return (
            <div>

                <div className="shoe-index-head">
                    {/* <div onAnimationEnd={this.endNotification}
                        className={this.state.animateNotification ?
                            "fadeout notification" : "notification"}>Item added to your cart!</div> */}
                    <ShoesHeader
                        cartItems={cartItems}
                        gender={this.props.match.params.gender}
                    />
                </div>

                <div className="shoe">

                    {/* <div className='shoebar'>
                        <div className="right">
                            <div className="dropdowns">
                                <span className="bar-link">Size</span>

                                <div className="dropdown-items">
                                    <h3>8</h3>
                                </div>
                            </div>

                            <div className="dropdowns">
                                <span className="bar-link">Hue</span>

                                <div className="dropdown-items">
                                    <h3>Blue</h3>
                                </div>
                            </div>
                        </div>

                    </div> */}

                    <div className="shoe-index-text">
                        <h2>Wool Runners</h2>

                        <ul className="shoe-category">
                            {/* <div className="wool-runners-images"> */}
                            {
                                this.getShoesByMaterialAndModel('wool', 'runners').map(shoe => (
                                    <ShoeIndexItem
                                        shoe={shoe}
                                        key={shoe.id}
                                        cart={this.state.cart}
                                        currentUser={this.props.currentUser}
                                        updateCartItem={this.props.updateCartItem}
                                        // key={`${shoe.id}-${shoe.material}`}
                                        // key={`${shoe.id}-${shoe.material}-${shoe.color}`}
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
                            {/* </div> */}

                        </ul>

                        {/* <ul className="filter-attributes">
                                <fitler
                                    
                                    material={"Wool"}
                                    model={"Runners"}
                                />
                        </ul> */}

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
                                        // key={`${shoe.id}-${shoe.material}`}
                                        // key={`${shoe.id}-${shoe.material}-${shoe.color}`}
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
                                        // key={`${shoe.id}-${shoe.material}`}
                                        // key={`${shoe.id}-${shoe.material}-${shoe.color}`}
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
                                        // key={`${shoe.id}-${shoe.material}`}
                                        // key={`${shoe.id}-${shoe.material}-${shoe.color}`}
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
                                        // key={`${shoe.id}-${shoe.material}`}
                                        // key={`${shoe.id}-${shoe.material}-${shoe.color}`}
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
                                        // key={`${shoe.id}-${shoe.material}`}
                                        // key={`${shoe.id}-${shoe.material}-${shoe.color}`}
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
                                        // key={`${shoe.id}-${shoe.material}`}
                                        // key={`${shoe.id}-${shoe.material}-${shoe.color}`}
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


