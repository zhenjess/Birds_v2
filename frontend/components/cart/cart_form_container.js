import React from 'react';

import { logout } from '../../actions/session_actions';

import { connect } from 'react-redux';

import CartForm from './cart_form';

const mapStateToProps = (state) => {
    return ({
        currentUser: state.session.id,
        errors: state.errors.session,
        formType: 'payment'
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        logout: () => dispatch(logout()),
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(CartForm);