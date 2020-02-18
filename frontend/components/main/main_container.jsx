import { connect } from 'react-redux';

import Main from './main';

import { fetchCart } from '../../actions/cart_actions';

const mapStateToProps = (state, ownProps) => ({
        user: state.users
});

const mapDispatchToProps = dispatch => ({
    fetchCart: (user) => dispatch(fetchCart(user)), 
});


export default connect(mapStateToProps, mapDispatchToProps)(Main);