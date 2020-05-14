import React from 'react';

import { Route } from 'react-router-dom';

import ShoesHeader from './shoes_header';

import ShoeIndexItem from './shoe_index_item';

import CartItem from '../modal/cart_item';

import Filter from './filter';

// import ShoeFilter from './shoe_filter';

import { filterAllShoesByColor } from '../../actions/filter_shoes_actions';

class ShoeIndex extends React.Component {
    constructor(props) {
        super(props);
       // debugger // check props
        this.state = {
            items: [],
            shouldAnimate: false,
            animateItems: true,
            animateNotification: false,
            cart: {},
            shoes: props.shoes,
            defaultFilters: 'default',
            //shoes: [],
            // // woolRunners: [],
            // // treeRunners: [],
            // // woolLoungers: [],
            // // treeLoungers: [],
            // // treeSkippers: [],
            // // treeToppers: [],
            // colorFilter: null,
            // styleFilter: null,
            // materialFilter: null,
        };
        this.handleAnimationEnd = this.handleAnimationEnd.bind(this);
        this.startNotification = this.startNotification.bind(this);
        this.endNotification = this.endNotification.bind(this);
        this.getShoesByMaterialAndModel = this.getShoesByMaterialAndModel.bind(this);
        this.handleClick = this.handleClick.bind(this);
        // this.addFilter = this.addFilter.bind(this);
    }

    componentDidMount() {
       // debugger
        const id = this.props.match.params.id;

        // const material = ['wool', 'tree'];

        // const style = ['Runners', 'Loungers', 'Skippers', 'Toppers'];
        //debugger // check this.props

        // this.props.fetchCart(this.props.currentUser.id).then((cart) => {
        //     this.props.fetchAllShoes().then(shoes => {

        //     });
        // });

        if(this.props.currentUser) {
            this.props.fetchCart(this.props.currentUser.id)
        }

        // this.props.fetchAllShoes().then(() => {
        //     this.getShoesByMaterialAndModel(material, style);
        // })
        this.props.fetchAllShoes().then((shoes) => { //retrieve all shoes, a promise
            this.setState({
                shoes: Object.values(shoes.payload.shoes) //payload is the value shoes from line 12
            }); //key: shoes, values: shoes
        })

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
    }

    componentDidUpdate(prevProp) {
        const id = this.props.match.params.id;
        if (this.props.location.pathname !== prevProp.location.pathname) {
        }
        // debugger
        // shoes in props
    }

    handleClick(color) {
        this.setState({
            defaultFilters: color
        });
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

    //this function is not yet used, is just defined
    getShoesByMaterialAndModel(material, style) { //expecting these args to be passed in when using the function
        //debugger // check this.props.shoes
        for (let i = 0; i < material.length; i++) {
            let currMaterial = material[i];

            for (let j = 0; j < style.length; j++) {
                let currStyle = style[j];
                let key = currMaterial.concat(currStyle);
                let shoesArr = this.props.shoes.filter(
                    shoe => shoe.style.toLowerCase() === currStyle.toLowerCase() &&
                        shoe.materiali.toLowerCase() === currMaterial.toLowerCase())
                // debugger
                this.setState({
                    [key]: shoesArr //this doesn't allow rerender in componentDidUpdate
                });
            }
        }
    }

    render() {
        const { shoes } = this.props;
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
        }

        const fetchCartItems = () => {
            const cartItems = this.state.cartItems.map(cartItem => {
                return (
                    <CartItem
                        startNotification={this.startNotification}
                        addToCart={addToCart}
                        animateItems={this.state.animateItems}
                        cartItem={cartItem}
                        // 
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


        let currentShoes = this.state.shoes;
        if (this.state.defaultFilters !== 'default') {
            //get filter type 
            let filterType = checkFilterType(this.state.defaultFilters); // return either 'color', 'style', 'material'
            currentShoes = this.state.shoes.filter((shoe) => {
                if (shoe[filterType] === this.state.defaultFilters) {
                    return true;
                } else {
                    return false;
                }
            })
        }
        // const materials = ['wool', 'tree'];

        // const styles = ['Runners', 'Loungers', 'Skippers', 'Toppers'];

        const cartItems = Object.keys(this.props.shoes).length;
        // let woolRunners = this.state.woolRunners ? this.state.woolRunners : [];
        // let woolRunners = [];
        // let treeRunners = this.state.treeRunners ? this.state.treeRunners : [];
        // let woolLoungers = this.state.woolLoungers ? this.state.woolLoungers : [];
        // let treeLoungers = this.state.treeLoungers ? this.state.treeLoungers : [];
        // let treeSkippers = this.state.treeSkippers ? this.state.treeSkippers : [];
        // let treeToppers = this.state.treeToppers ? this.state.treeToppers : [];

        

        // for (let i = 0; i < material.length; i++) {
        //     let currMaterial = material[i];

        //     for (let j = 0; j < style.length; j++) {
        //         let currStyle = style[j];
        //         let key = currMaterial.concat(currStyle);
        //         let shoesArr = this.props.shoes.filter(
        //             shoe => shoe.style.toLowerCase() === currStyle.toLowerCase() &&
        //                 shoe.material.toLowerCase() === currMaterial.toLowerCase())
        //         // debugger
                
        //         if(key === 'woolRunners') {
        //             woolRunners = shoesArr; //
        //         }
        //     }
        // }

       for (let i = 0; i < materials.length; i++) {
           for (let j = 0; j < styles.length; j++) {
               let pairs = materials[i] + styles[j];
               return pairs;
           }
       }
    }
}

       debugger // check this.props.shoes, woolRunners
        return (
            <div>
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
                <div className="shoe-index-head">
                    <ShoesHeader
                        cartItems={cartItems}
                        gender={this.props.match.params.gender}
                        filterAllShoesByColor={this.props.filterAllShoesByColor}
                    />
                </div>
                <div className="shoe">
                    <div className="shoe-index-text">
                        <h2>${materials[j]}${styles[i]}</h2>
                        <ul className="shoe-category">
                            {
                                this.state.shoes.filter(shoes => {
                                    shoes.style === styles[i] && 
                                    shoes.material === materials[j]
                                },
                                    <ShoeIndexItem
                                        shoe={shoe}
                                        key={shoe.id}
                                        cart={this.props.cart}
                                        currentUser={this.props.currentUser}
                                        createCartItem={this.props.createCartItem}
                                        addToCart={this.props.addToCart}
                                        startNotification={this.startNotification}
                                        openModal={this.props.openModal}
                                        closeModal={this.props.closeModal}
                                    />
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
        return (

            <div>
                <div className="shoe-index-head">
                    <ShoesHeader
                        cartItems={cartItems}
                        gender={this.props.match.params.gender}
                        filterAllShoesByColor={this.props.filterAllShoesByColor}
                    />
                </div>

                <div className="shoe">

                    <div className="shoe-index-text">
                        <h2>Wool Runners</h2>

                        <ul className="shoe-category">
                            {
                                woolRunners.map(shoe => (
                                    // <Filter>
                                    //shoes.filter(()=> {
                                        //foreachshoe, shoe has color, mat, style property
                                        //only take shoe if shoe.color ==== this.state.colorFilter && 
                                        //shoe.style === this.state.styleFilter

                                        //check of this.state.styleFilter ==== null then user has not yet chose a color so dont render
                                    //})
                                    <ShoeIndexItem
                                        shoe={shoe}
                                        key={shoe.id}
                                        cart={this.props.cart}
                                        currentUser={this.props.currentUser}
                                        createCartItem={this.props.createCartItem}
                                        addToCart={this.props.addToCart}
                                        startNotification={this.startNotification}
                                        openModal={this.props.openModal}
                                        closeModal={this.props.closeModal}
                                    />
                                    // </Filter>
                                ))
                            }

                        </ul>

                        <br />


                        <h2>Tree Runners</h2>

                        <ul className="shoe-category">
                            {
                                treeRunners.map(shoe => (
                                    // <Filter>
                                    <ShoeIndexItem
                                        shoe={shoe}
                                        key={shoe.id}
                                        cart={this.props.cart}
                                        currentUser={this.props.currentUser}
                                        createCartItem={this.props.createCartItem}
                                        addToCart={this.props.addToCart}
                                        startNotification={this.startNotification}
                                        openModal={this.props.openModal}
                                        closeModal={this.props.closeModal}
                                    />
                                    // </Filter>
                                ))
                            }

                        </ul>
                        <br />

                        <h2>Wool Loungers</h2>

                        <ul className="shoe-category">
                            {
                                woolLoungers.map(shoe => (
                                    // <Filter>
                                    <ShoeIndexItem
                                        shoe={shoe}
                                        key={shoe.id}
                                        cart={this.props.cart}
                                        currentUser={this.props.currentUser}
                                        createCartItem={this.props.createCartItem}
                                        addToCart={this.props.addToCart}
                                        startNotification={this.startNotification}
                                        openModal={this.props.openModal}
                                        closeModal={this.props.closeModal}
                                    />
                                    // </Filter>
                                ))
                            }

                        </ul>
                        <br />

                        <h2>Tree Loungers</h2>

                        <ul className="shoe-category">
                            {
                                treeLoungers.map(shoe => (
                                    // <Filter>
                                    <ShoeIndexItem
                                        shoe={shoe}
                                        key={shoe.id}
                                        cart={this.props.cart}
                                        currentUser={this.props.currentUser}
                                        createCartItem={this.props.createCartItem}
                                        addToCart={this.props.addToCart}
                                        startNotification={this.startNotification}
                                        openModal={this.props.openModal}
                                        closeModal={this.props.closeModal}
                                    />
                                    // </Filter>
                                ))
                            }

                        </ul>

                        <br />

                        <h2>Tree Skippers</h2>

                        <ul className="shoe-category">
                            {
                                treeSkippers.map(shoe => (
                                    // <Filter>
                                    <ShoeIndexItem
                                        shoe={shoe}
                                        key={shoe.id}
                                        cart={this.props.cart}
                                        currentUser={this.props.currentUser}
                                        createCartItem={this.props.createCartItem}
                                        addToCart={this.props.addToCart}
                                        startNotification={this.startNotification}
                                        openModal={this.props.openModal}
                                        closeModal={this.props.closeModal}
                                    />
                                    // </Filter>
                                ))
                            }

                        </ul>
                        <br />

                        <h2>Tree Toppers</h2>

                        <ul className="shoe-category">
                            {
                                treeToppers.map(shoe => (
                                    // <Filter>
                                    <ShoeIndexItem
                                        shoe={shoe}
                                        key={shoe.id}
                                        cart={this.props.cart}
                                        currentUser={this.props.currentUser}
                                        createCartItem={this.props.createCartItem}
                                        addToCart={this.props.addToCart}
                                        startNotification={this.startNotification}
                                        openModal={this.props.openModal}
                                        closeModal={this.props.closeModal}
                                    />
                                    // </Filter>
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


