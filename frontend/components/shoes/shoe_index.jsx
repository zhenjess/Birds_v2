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
}