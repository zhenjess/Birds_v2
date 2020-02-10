import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "", 
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
        const signup = this.props.signup;
        const user = Object.assign({}, this.state);
        signup(user);
        this.setState({ processed: true });
    }

    renderErrors() {
        if (this.state.processed) {
            return (
                <div className="email-error">
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
    }

    render() {
        return (
            <footer className='footer-container'>
                <div className="footer-container-flex-left">
                    <div className="footer-label">Enter your email to stay in touch!</div>
                    <br/>
                    {/* <style>
                        @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
                    </style> */}
                        <input
                            id="email"
                            type="text"
                            onChange={this.update('email')}
                        />
                    {this.renderErrors()}
                    <button type="button" onClick={this.handleSubmit} className="submit">SIGN UP</button>
                    {/* <input type="submit" onClick={this.handleSubmit} className="submit" value="SIGN UP" /> */}
                </div>
                <div className="footer-container-flex-right">
                    <div className="footer-copyright">&copy; 2020 Birds, Inc.</div>
                    <a className="footer-git" href="https://github.com/zhenjess"><i className="fab fa-github" /></a>
                    <a className="footer-linkedin" href="https://www.linkedin.com/in/jessica-zhen-b2272a122/"><i className="fab fa-linkedin" /></a>
                    <a className="footer-angel" href="https://angel.co/jessica-zhen"><i className="fab fa-angellist" /></a>
                </div>
            </footer>
        );
    }
}

export default Footer;