import React from "react";

import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            processed: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const login = this.props.login;
        const user = Object.assign({}, this.state);
        login(user);
        this.setState({ processed: true });
    }

    demoLogin(e) {
        e.preventDefault();

        let i = 0;
        let j = 0;
        let email = "allbirds@gmail.com";
        let password = "password";

        const typeUser = () => {
            let timeout;
            if (i < email.length) {
                document.getElementById("email").value += email.charAt(i);
                i++;
                timeout = setTimeout(typeUser, 100);
            } else {
                clearTimeout(timeout);
            }
        }

        const typePassword = () => {
            let timeout;
            if (i < password.length) {
                document.getElementById('password').value += password.charAt(j);
                j++;
                timeout = setTimeout(typePassword, 100);
            } else {
                clearTimeout(timeout);
            }
        }

        if (this.props.formType === 'login') {
            typeUser();

            window.setTimeout(() => {
                typePassword();
            }, 1500)

            window.setTimeout(() => {
                this.setState({ email: "allbirds@gmail.com", password: "password" }, () => {
                    const user = Object.assign({}, this.state);
                    this.props.login(user)
                        .then(() => {
                            this.props.history.push('/account')
                        });
                });
            }, 1500)
        }
    }

    renderErrors() { 
        return (
            <div className="errors">
                <ul>
                    {
                        this.props.errors.map((error, i) => (
                            <li key={`error-${i}`}>{error}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }

    render() {
        const { email, password } = this.state;

        return (
            <div className="login-form-container">
                <form className="login-form" onSubmit={this.handleSubmit}>

                    <div className="login-content">
                        <br />
                        <h2>LOGIN</h2>

                        {this.renderErrors()}
                     
                        <label className="email-label">EMAIL</label>
                       
                        <input
                            id="email"
                            type="text"
                            value={email}
                            onChange={this.update('email')}
                        />

                        <label className="email-label">PASSWORD</label>
                      
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={this.update('password')}
                        />
                        <br />
                        <input type="submit" className="submit" value="SIGN IN" />
                        <br />
                        <button className="submit" onClick={this.demoLogin}>DEMO SIGN IN</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(LoginForm);





