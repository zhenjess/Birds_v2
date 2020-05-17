import React from 'react';
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
            shoes: props.shoes,
            defaultFilters: 'default',
        };
        this.handleAnimationEnd = this.handleAnimationEnd.bind(this);
        this.startNotification = this.startNotification.bind(this);
        this.endNotification = this.endNotification.bind(this);
        this.getShoesByMaterialAndStyle = this.getShoesByMaterialAndStyle.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        this.props.fetchAllShoes();

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

    handleClick(filter) {
        this.setState({
            defaultFilters: filter
        });
    }

    getShoesByMaterialAndStyle(shoes) {
        const materials = ['Wool', 'Tree'];
        const styles = ['Runners', 'Loungers', 'Skippers', 'Breezers'];

        for (let i = 0; i < materials.length; i++) {
            let currMaterial = materials[i];

            for (let j = 0; j < styles.length; j++) {
                let currStyle = styles[j];

                let shoeGroupArr = shoes.filter(shoe => 
                    shoe.material.toLowerCase() === currMaterial &&
                    shoe.style.toLowerCase() === currStyle
                )
            }
        }
    }

    render() {
        const { shoes } = this.state.shoes;
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
                                this.getShoesByMaterialAndStyle('wool', 'runners').map(shoe => (
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
                                this.getShoesByMaterialAndStyle('tree', 'runners').map(shoe => (
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

                        <h2>Wool Loungers</h2>
                        <ul className="shoe-category">
                            {
                                this.getShoesByMaterialAndStyle('wool', 'loungers').map(shoe => (
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

                        <h2>Tree Loungers</h2>
                        <ul className="shoe-category">
                            {
                                this.getShoesByMaterialAndStyle('tree', 'loungers').map(shoe => (
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

                        <h2>Tree Skippers</h2>
                        <ul className="shoe-category">
                            {
                                this.getShoesByMaterialAndStyle('tree', 'skippers').map(shoe => (
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

                        <h2>Tree Toppers</h2>
                        <ul className="shoe-category">
                            {
                                this.getShoesByMaterialAndStyle('tree', 'toppers').map(shoe => (
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

                        <h2>Tree Breezers</h2>
                        <ul className="shoe-category">
                            {
                                this.getShoesByMaterialAndStyle('tree', 'breezers').map(shoe => (
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
                    </div>
                </div>
            </div>
        );
    }
}

export default ShoeIndex;