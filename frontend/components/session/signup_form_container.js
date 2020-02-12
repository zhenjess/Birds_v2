import React from 'react';

import { signup, clearErrors } from '../../actions/session_actions';

import { connect } from 'react-redux';

import SignupForm from './signup_form';

const mapStateToProps = (state) => {
    return ({
        currentUser: state.session.id, 
        errors: state.errors.session,
        formType: 'signup'
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        signup: user => dispatch(signup(user)),
        // clearErrors: () => dispatch(clearErrors())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);