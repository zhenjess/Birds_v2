import { connect } from 'react-redux';

import NavbarForm from './navbar_form';

import { Link, Route } from 'react-router-dom';

import { openModal, closeModal } from '../../actions/modal_actions';



const mapStateToProps = state => ({
    currentUser: state.session.id
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: () => dispatch(openModal()), 
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavbarForm);
