import React from 'react';

import { Link, withRouter } from 'react-router-dom';

import DropDownBtn from './nav_dropbtn';

import ShoesDropdown from './nav_dropdown';

// import CartContainer from '../modal/cart_container';


class NavbarForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            scrollPosition: window.pageYOffset,
            isHovered: false,
            processed: false,
            dropDown: false, 
            dropDownGender: "Women",
            activeHeader: false,
            isAnimating: false,
            bounce: false,
            // openCart: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.showDropDown = this.showDropDown.bind(this);
        this.handleAnimation = this.handleAnimation.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        // this.handleOpenCart = this.handleOpenCart.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.setState({activeHeader: !!(this.state.scrollPosition || this.state.isHovered || this.state.dropDown)});
    }

    handleScroll() {
        this.setState(() => ({ scrollPosition: window.pageYOffset }));
        this.setState(state => ({ activeHeader: !!(state.scrollPosition || state.isHovered || state.dropDown )}));
    }

    handleSubmit(modal) {
        return (e) => {
            e.preventDefault();
            
            if (this.state.processed) {
                this.setState({ processed: false }, () => this.props.closeModal());
            } else {
                this.setState({ processed: true }, () => this.props.openModal());
            }
        }
    }

    showDropDown(dropDownGender) {
        this.setState(state => {
            if (state.dropDown && dropDownGender !== state.dropDownGender) {
                return ({
                    dropDown: true, 
                    dropDownGender: dropDownGender,
                    isAnimating: true, 
                    bounce: true
                });
            } else if (!state.dropDown) {
                return ({
                    dropDown: true, 
                    dropDownGender: dropDownGender,
                    isAnimating: true, 
                    bounce: false
                });
            } else {
                return ({
                    dropDown: false, 
                    dropDownGender: dropDownGender,
                    bounce: false
                });
            }
        });
    }

    handleAnimation() {
        this.setState({ isAnimating: false });
    }

    // handleOpenCart() {
    //     const openCart = !this.state.openCart;
    //     this.setState({
    //         openCart
    //     });
    // }

    render() {
        const activeHeader = this.state.activeHeader;
        const dropDown = this.state.dropDown;

        return (
            <>
            <div className={(dropDown && activeHeader) ? 'active-header with-dropdown' : (activeHeader) ? 'active-header' : 'header'} id='header'>
                <div id="navs">
                    <div className="navbar" id="nav-left">
                        <DropDownBtn
                            activeHeader={activeHeader}
                            showDropDown={this.showDropDown}
                            dropDown={this.state.dropDown}
                            dropDownGender={this.state.dropDownGender}
                            title="WOMEN"
                            id="WOMEN"
                        />
                        <DropDownBtn
                            activeHeader={activeHeader}
                            showDropDown={this.showDropDown}
                            dropDown={this.state.dropDown}
                            dropDownGender={this.state.dropDownGender}
                            title="MEN"
                            id="MEN"
                        />
                    </div>
                    <div className="navbar" id="nav-center">
                        <Link className="logo" to={"/"}>birds</Link> 
                    </div>
                        {/* <style>
                            @import url('https://fonts.googleapis.com/css?family=Lobster+Two:400i&display=swap');
                        </style>
                        <Link className="logo" to='/'>birds</Link> */}

                    

                    <div className="navbar" id="nav-icons">
                        <div className="nav-right">
                            <div className="nav-materials">
                                <Link to={"/materials"}>MATERIALS</Link>
                                {/* <a href="#materials">MATERIALS</a> */}
                            </div>
                            <div className="nav-branches">
                                <Link to={"/branches"}>BRANCHES</Link>
                            </div>
                        </div>
                        <Link to={"/account/login"}><button className="icon-button cart-button"><i className="far fa-user icon"></i></button></Link>
                        <Link to={"/"}><button className="icon-button cart-button"><i className="far fa-question-circle icon"></i></button></Link>
                        <button className="icon-button cart-button" onClick={this.handleSubmit("shoe index")}><i className="fas fa-shopping-cart" /></button>
                        {/* <Link className="icon-button cart-button" to="/account/login"><i className="far fa-user icon"></i></Link> */}
                        {/* <a href="#account" className="icon-button cart-button" ><i className="far fa-user icon"></i></a> */}
                        {/* <a href="?" className="icon-button cart-button" ><i className="far fa-question-circle icon"></i></a> */}
                        {/* <div onClick={this.handleOpenCart} className={(activeHeader ?
                            "a-header-button cart-header-button" :
                            "u-header-button cart-header-button") + " nav-link"}>
                            <i className="fas fa-shopping-cart" />
                        </div> */}
                    </div>
                </div>
            </div>

            <div 
                onAnimationEnd={this.handleAnimation} 
                id="nav-dropdown" className={!this.state.dropDown ? 'invisible' : !this.state.isAnimating ? 'visible' : this.state.bounce ? 'visible swipe-up-down' : 'visible swipe-down'}>
                <ShoesDropdown gender={this.state.dropDownGender} genderQuery={this.state.dropDownGender === 'WOMEN' ? 'women' : 'men'} showDropDown={this.showDropDown} />
            </div>
            <div className={dropDown ? 'overlay-visible' : 'overly-invisible'}></div>
            {/* <CartContainer open={this.state.openCart} handleOpenCart={this.handleOpenCart}/> */}
            </>
            // <div className="navbar">
            //     <div className="nav-left">
            //         <div className="dropdown-women">
            //             <span className="nav-link" to="/shoes/women">WOMEN</span>
            //             <i className="fas fa-angle-down"></i>
            //         </div>
            //         <div className="dropdown-men">
            //             <span className="nav-link" to="/shoes/women">MEN</span>
            //             <i className="fas fa-angle-down"></i>
            //         </div>
            //     </div>

            //     <div className="logo">
            //         <style>
            //             @import url('https://fonts.googleapis.com/css?family=Lobster+Two:400i&display=swap');
            //         </style>
            //         <Link className="logo" to='/'>birds</Link>

            //     </div>

            //     <div className="nav-icons">
            //         <div className="nav-right">
            //             <div className="nav-materials">
            //                 <a href="#materials">MATERIALS</a>
            //             </div>
            //             <div className="nav-branches">
            //                 <a href="#branches">BRANCHES</a>
            //             </div>
            //         </div>
            //         <a href="#account" className="icon-button cart-button" ><i className="far fa-user icon"></i></a>
            //         <a href="?" className="icon-button cart-button" ><i className="far fa-question-circle icon"></i></a>
            //         <button className="icon-button cart-button" onClick={this.handleSubmit("shoe index")}><i className="fas fa-shopping-cart" /></button>
            //     </div>
            // </div>
        );
    }
}

export default withRouter(NavbarForm);