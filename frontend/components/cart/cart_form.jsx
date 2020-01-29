import React from 'react';

import { Link, withRouter } from 'react-router-dom';

import LoginFormContainer from '../session/login_form_container';

import CartContainer from '../modal/cart_container';

class CartForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            processed: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        const logout = this.props.logout;
        logout();
        this.setState({ processed: true });
        this.props.history.push('/');
    }

    
    render() {
        return (
            <div className="payment-form" onClick={e.stopPropagation()}>
                <div className="payment-form-container">
                    <form>
                        <h2>Thank you for YOUR Purchase!</h2>
                        <style>
                            @import url('https://fonts.googleapis.com/css?family=Roboto:500&display=swap');
                        </style>
                        <br />
                        {/* <input type="submit" className="submit" value="LOGOUT"/>   */}
                        <Link className="submit-payment" onClick={this.handleSubmit} to="/">PROCESS PAYMENT</Link>
                    </form>
                </div>

                <br />
                <br />
                
                <p>Please Review my Current Projects!</p>

                <div className="project-links">
                    <a className="footer-git" href="https://github.com/zhenjess"><i className="fab fa-github" /></a>
                    <a className="footer-linkedin" href="https://www.linkedin.com/in/jessica-zhen-b2272a122/"><i className="fab fa-linkedin" /></a>
                    <a className="footer-angel" href="https://angel.co/jessica-zhen"><i className="fab fa-angellist" /></a>
                </div>
            </div>
        );
    }
}

export default withRouter(CartForm);

