//import React from 'react'; //only needed for component
//give props from redux to account.js

import { connect } from 'react-redux';

import AccountForms from './account_forms';

const mapStateToProps = (state) => {
    return ({
        currentUser: state.session.id
    });
};


export default connect(mapStateToProps)(AccountForms);