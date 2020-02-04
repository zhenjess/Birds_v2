import { connect } from 'react-redux';

import Main from './main';

import { fetchCart } from '../../actions/cart_actions';

const mapStateToProps = (state, ownProps) => ({
        user: state.users
    // let users;
    // if (Object.values(state.entities.users).length > 0) {
    //     users = state.entities.users;
    // } else {
    //     users = {};
    // }

    // return ({
    //     users
    // });
});

const mapDispatchToProps = dispatch => ({
    fetchCart: (user) => dispatch(fetchCart(user)), //, cartId
});


// const mapDispatchToProps = dispatch => {
//     return {
//         fetchCart: (userId) => dispatch(fetchCart(userId)),
//     };
// };

export default connect(mapStateToProps, mapDispatchToProps)(Main);