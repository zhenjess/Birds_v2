import React from 'react';

import SignupFormContainer from './signup_form_container';

import LoginFormContainer from './login_form_container';

import LogoutFormContainer from './logout_form_container';


class AccountForms extends React.Component {
 
        renderForm() {
            if (this.props.currentUser) {
                return <LogoutFormContainer />
            }    
            return (
                <div className="account-page">
                    <LoginFormContainer />
                    <SignupFormContainer />
                </div>
        );      
    }
    render() {
        return (
           this.renderForm()
        );
    }
}

export default AccountForms;

