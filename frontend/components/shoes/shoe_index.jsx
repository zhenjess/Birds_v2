import React from 'react';

import ShoesHeader from './shoes_header';

import ShoeIndexItem from './shoe_index_item';

import CartItem from '../modal/cart_item';

import Filter from './filter';

// import ShoeFilter from './shoe_filter';

import { filterAllShoesByColor } from '../../actions/filter_shoes_actions';

class ShoeIndex extends React.Component {
    constructor(props) {
        super(props);
        debugger // check props
        this.state = {
            items: [],
            shouldAnimate: false,
            animateItems: true,
            animateNotification: false,
            cart: {},
            shoes: props.shoes,
            defaultFilters: 'default';
        };
        this.handleAnimationEnd = this.handleAnimationEnd.bind(this);
        this.startNotification = this.startNotification.bind(this);
        this.endNotification = this.endNotification.bind(this);
        this.getShoesByMaterialAndStyle = this.getShoesByMaterialAndStyle.bind(this);
        this.handleClick = this.handleClick.bind(this);
        // this.addFilter = this.addFilter.bind(this);
    }

    componentDidMount() {
        debugger
        const id = this.props.match.params.id;
        const materials = ['Wool', 'Tree'];
        const styles = ['Runners', 'Loungers', 'Skippers', 'Toppers'];
        debugger // check this.props

        if (this.props.currentUser) {
            this.props.fetchCart(this.props.currentUser.id)
        }

        this.props.fetchAllShoes().then((shoes) => {
            this.setState({
                shoes: Object.values(shoes.payload.shoes)
            });
        })

        if (this.props.currentUser) {
            this.props.fetchCart(this.props.currentUser.id).then((cart) => {
                this.setState({
                    cart: cart
                });
            });
        }
    }

        // this.props.fetchAllShoes().then(() => {
        //     this.getShoesByMaterialAndModel(material, style);
        // })


        //props are passed in by parent component, props are configurations
        // this.props.fetchAllShoes().then(shoes => {
        //     if (this.props.currentUser) {
        //         this.props.fetchCart(this.props.currentUser.id).then((cart) => {
        //             this.setState({
        //                 // cart: cart
        //                 cart: this.props.cart

        //             });
        //         });

        //     }
        //     //invoke/call the function/use here
        // this.getShoesByMaterialAndModel(material, style);
        //    // console.log(this.state);
        // });
        //set up local state for each category

    componentDidUpdate(prevProp) {
        const id = this.props.match.params.id;
        if (this.props.location.pathname !== prevProp.location.pathname) {
        }
        // debugger
        // shoes in props
    }

    //function definitions not yet used
    handleAnimationEnd() {
        this.setState({ shouldAnimate: false });
    }

    //this.handleAnimationEnd() is using the function/invoking on the class

    startNotification() {
        this.setState({ animateNotification: true });
    }

    endNotification() {
        this.setState({ animateNotification: false });
    }

    handleClick(filter) {
        this.setState({
            defaultFilters: filter
        });
    }

    //this function is not yet used, is just defined
    getShoesByMaterialAndStyle(materials, styles) { //expecting these args to be passed in when using the function
        debugger // check this.props.shoes
        for (let i = 0; i < materials.length; i++) {
            let currMaterial = materials[i];

            for (let j = 0; j < styles.length; j++) {
                let currStyle = styles[j];
                let key = currMaterial.concat(currStyle);
                let shoesArr = this.props.shoes.filter(
                    shoe => shoe.styles.toLowerCase() === currStyle.toLowerCase() &&
                        shoe.materials.toLowerCase() === currMaterial.toLowerCase())
                // debugger
                this.setState({
                    [key]: shoesArr //this doesn't allow rerender in componentDidUpdate
                });
            }
        }
    }

    render() {
        const { shoes } = this.state.shoes;
        //const { shoes } = this.props;
        const { addToCart } = this.props;
        const materials = ['Wool', 'Tree'];
        const colors = ['Black', 'Grey', 'White', 'Red', 'Green', 'Blue'];
        const styles = ['Runners', 'Loungers', 'Skippers', 'Toppers'];

        if (this.state.shoes === null) {
            return null;
        }

        const checkFilterType = function (filter) {
            if (colors.includes(filter)) {
                return 'color';
            } else if (styles.includes(filter)) {
                return 'style';
            } else if (materials.includes(filter)) {
                return 'material';
            }
        };

        let currentShoes = this.state.shoes;
        if (this.state.defaultFilters !== 'default') {
            let filterType = checkFilterType(this.state.defaultFilters);
            currentShoes = this.state.shoes.filter((shoe) => {
                if (shoe[filterType] === this.state.defaultFilters) {
                    return true;
                } else {
                    return false;
                }
            });
        }

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

        debugger // check this.props.shoes, woolRunners
        return (

            <div>
                <div className="shoe-index-head">
                    <ShoesHeader
                        cartItems={cartItems}
                        gender={this.props.match.params.gender}
                        // filterAllShoesByColor={this.props.filterAllShoesByColor}
                    />
                    {currentShoes.map((shoe) => {
                        return (
                            <div>
                                {shoe.material + shoe.style + shoe.color + shoe.id + shoe.gender};
                                <img src={shoe.photoUrl}></img>

                                {/* <shoeindexitem > */}
                            </div>
                        )
                    })}
                    {colors.map((color) => {
                        return <button onClick={() => this.handleClick(color)}>{color}</button>
                    })}
                    {styles.map((style) => {
                        return <button onClick={() => this.handleClick(style)}>{style}</button>
                    })}
                    {materials.map((material) => {
                        return <button onClick={() => this.handleClick(material)}>{material}</button>
                    })}
                </div>

                <div className="shoe">

                    <div className="shoe-index-text">
                        <h2>Wool Runners</h2>

                        <ul className="shoe-category">
                            {
                                this.getShoesByMaterialAndStyle('Wool', 'Runners').map(shoe => (                               
                                    <ShoeIndexItem
                                        shoe={shoe}
                                        key={shoe.id}
                                        cart={this.props.cart}
                                        currentUser={this.props.currentUser}
                                        createCartItem={this.props.createCartItem}
                                        updateCartItem={this.props.updateCartItem}
                                        addToCart={this.props.addToCart}
                                        cartItem={this.props.cartItems}
                                        startNotification={this.startNotification}
                                        openModal={this.props.openModal}
                                        closeModal={this.props.closeModal}
                                        history={this.props.history}
                                    />
                                ))
                            }

                        </ul>

                        <br />


                        <h2>Tree Runners</h2>

                        <ul className="shoe-category">
                            {
                                this.getShoesByMaterialAndStyle('Tree', 'Runners').map(shoe => (
                                    <ShoeIndexItem
                                        shoe={shoe}
                                        key={shoe.id}
                                        cart={this.props.cart}
                                        currentUser={this.props.currentUser}
                                        createCartItem={this.props.createCartItem}
                                        updateCartItem={this.props.updateCartItem}
                                        addToCart={this.props.addToCart}
                                        cartItem={this.props.cartItems}
                                        startNotification={this.startNotification}
                                        openModal={this.props.openModal}
                                        closeModal={this.props.closeModal}
                                        history={this.props.history}
                                    />
                                ))
                            }

                        </ul>
                        <br />

                        <h2>Wool Loungers</h2>

                        <ul className="shoe-category">
                            {
                                this.getShoesByMaterialAndStyle('Wool', 'Loungers').map(shoe => (
                                    <ShoeIndexItem
                                        shoe={shoe}
                                        key={shoe.id}
                                        cart={this.props.cart}
                                        currentUser={this.props.currentUser}
                                        createCartItem={this.props.createCartItem}
                                        updateCartItem={this.props.updateCartItem}
                                        addToCart={this.props.addToCart}
                                        cartItem={this.props.cartItems}
                                        startNotification={this.startNotification}
                                        openModal={this.props.openModal}
                                        closeModal={this.props.closeModal}
                                        history={this.props.history}
                                    />
                                ))
                            }

                        </ul>
                        <br />

                        <h2>Tree Loungers</h2>

                        <ul className="shoe-category">
                            {
                                this.getShoesByMaterialAndStyle('Tree', 'Loungers').map(shoe => (
                                    <ShoeIndexItem
                                        shoe={shoe}
                                        key={shoe.id}
                                        cart={this.props.cart}
                                        currentUser={this.props.currentUser}
                                        createCartItem={this.props.createCartItem}
                                        updateCartItem={this.props.updateCartItem}
                                        addToCart={this.props.addToCart}
                                        cartItem={this.props.cartItems}
                                        startNotification={this.startNotification}
                                        openModal={this.props.openModal}
                                        closeModal={this.props.closeModal}
                                        history={this.props.history}
                                    />
                                ))
                            }

                        </ul>

                        <br />

                        <h2>Tree Skippers</h2>

                        <ul className="shoe-category">
                            {
                                this.getShoesByMaterialAndStyle('Tree', 'Skippers').map(shoe => (
                                    <ShoeIndexItem
                                        shoe={shoe}
                                        key={shoe.id}
                                        cart={this.props.cart}
                                        currentUser={this.props.currentUser}
                                        createCartItem={this.props.createCartItem}
                                        updateCartItem={this.props.updateCartItem}
                                        addToCart={this.props.addToCart}
                                        cartItem={this.props.cartItems}
                                        startNotification={this.startNotification}
                                        openModal={this.props.openModal}
                                        closeModal={this.props.closeModal}
                                        history={this.props.history}
                                    />
                                ))
                            }

                        </ul>
                        <br />

                        <h2>Tree Toppers</h2>

                        <ul className="shoe-category">
                            {
                                this.getShoesByMaterialAndStyle('Tree', 'Toppers').map(shoe => (
                                    <ShoeIndexItem
                                        shoe={shoe}
                                        key={shoe.id}
                                        cart={this.props.cart}
                                        currentUser={this.props.currentUser}
                                        createCartItem={this.props.createCartItem}
                                        updateCartItem={this.props.updateCartItem}
                                        addToCart={this.props.addToCart}
                                        cartItem={this.props.cartItems}
                                        startNotification={this.startNotification}
                                        openModal={this.props.openModal}
                                        closeModal={this.props.closeModal}
                                        history={this.props.history}
                                    />
                                ))
                            }

                        </ul>
                        <br />
                    </div>
                </div>
            </div>
        )
    }
}

export default ShoeIndex;


