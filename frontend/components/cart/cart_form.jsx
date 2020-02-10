import React from 'react';

class CartForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="payment-form">
                <div className="payment-form-container">
                    <form>
                        <h2>Thank you for YOUR Purchase!</h2>
                        {/* <style>
                            @import url('https://fonts.googleapis.com/css?family=Roboto:500&display=swap');
                        </style> */}
                    </form>
                </div>

                <br/>
                <br/>

                <div className="project-links">
                    <a className="project-git" href="https://github.com/zhenjess"><i className="fab fa-github" /></a>
                    <a className="project-linkedin" href="https://www.linkedin.com/in/jessica-zhen-b2272a122/"><i className="fab fa-linkedin" /></a>
                    <a className="project-angel" href="https://angel.co/jessica-zhen"><i className="fab fa-angellist" /></a>
                </div>
            </div>
        );
    }
}

export default CartForm;

