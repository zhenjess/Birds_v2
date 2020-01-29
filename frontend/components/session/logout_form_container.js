import React from 'react';

import { logout } from '../../actions/session_actions';

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
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(LogoutForm);