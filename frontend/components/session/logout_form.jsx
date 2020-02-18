import React from 'react';

import { Link, withRouter } from 'react-router-dom';

class LogoutForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        const logout = this.props.logout;
        const user = Object.assign({}, this.state);
        logout();
        this.setState({ processed: true });
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="logout">
                <div className="logout-form-container">
                    <form>
                        <h2>MY ACCOUNT</h2>
                        <br />
                      
                        <Link type="submit" className="logout-link" onClick={this.handleSubmit} to="/">LOGOUT</Link> 
                    </form>
                </div>
                <div className="logout-status">
                    <div className="orders">
                        <p>You haven't placed any orders yet.</p>
                    </div>

                    <div className="default">
                        <h3 className="name">All Birds</h3>
                        <div className="address-body">
                            <div className="email">allbirds@gmail.com</div>
                            <p>YOU HAVEN'T ADDED AN ADDRESS YET.</p>
                            <Link to="/">Add an Address</Link>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default withRouter(LogoutForm);
