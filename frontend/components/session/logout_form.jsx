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

    componentWillUnmount() {
        this.props.clearErrors();
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
                        <button className="logout-link" onClick={this.handleSubmit}>LOGOUT</button>           
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
                            <button className="logout-link" onClick={this.handleSubmit}>Add an Address</button>  
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default withRouter(LogoutForm);

// import React from 'react';

// import { Link, withRouter } from 'react-router-dom';

// class LogoutForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             processed: false
//         };
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     update(field) {
//         return (e) => {
//             this.setState({ [field]: e.currentTarget.value });
//         };
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         const logout = this.props.logout;
//         const user = Object.assign({}, this.state);
//         logout();
//         this.setState({ processed: true });
//         // console.log(this.props);
//         this.props.history.push('/');
//     }

//     render() {
//         return (
//             <div className="logout">
//                 <div className="logout-form-container">
//                     <form>
//                         <h2>MY ACCOUNT</h2>
//                         <style>
//                             @import url('https://fonts.googleapis.com/css?family=Roboto:500&display=swap');
//                         </style>
//                         <br/>
//                         {/* <input type="submit" className="submit" value="LOGOUT"/>   */}
//                         <Link className="logout-link" onClick={this.handleSubmit} to="/">LOGOUT</Link> 
//                     </form>
//                 </div>
//                 <div className="logout-status">
//                     <div className="orders">
//                         <p>You haven't placed any orders yet.</p>
//                     </div>

//                     <div className="default">
//                         <h3 className="name">All Birds</h3>
//                         <div className="address-body">
//                             <div className="email">allbirds@gmail.com</div>
//                             <p>YOU HAVEN'T ADDED AN ADDRESS YET.</p>
//                             <a href="/">Add an Address</a>
//                         </div>
//                     </div>
//                 </div>

//             </div>

//         );
//     }
// }

// export default withRouter(LogoutForm);