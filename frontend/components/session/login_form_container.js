import React from 'react';

import { login, clearErrors } from '../../actions/session_actions';

import { connect } from 'react-redux';

import LoginForm from './login_form';

const mapStateToProps = (state) => {
    return ({
        currentUser: state.session.id,
        errors: state.errors.session,
        formType: 'login'
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        login: user => dispatch(login(user)),
        typeWriter: user => dispatch(typeWriter(user)),
        clearErrors: () => dispatch(clearErrors())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);