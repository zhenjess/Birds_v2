import React from 'react';

import { connect } from 'react-redux';

import CartForm from './cart_form';

const mapStateToProps = (state) => {
    return ({
        currentUser: state.session.id,
        errors: state.errors.session,
        formType: 'payment'
    });
};

export default connect(mapStateToProps, null)(CartForm);