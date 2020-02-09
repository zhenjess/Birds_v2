import React from 'react';

import { logout, clearErrors } from '../../actions/session_actions';

import { connect } from 'react-redux';

import LogoutForm from './logout_form';

const mapStateToProps = (state) => {
    return ({
        currentUser: state.session.id,
        formType: 'logout'
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        logout: () => dispatch(logout()),
        clearErrors: () => dispatch(clearErrors())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(LogoutForm);