import * as APIUtil from '../util/shoes_api_util';

export const RECEIVE_ALL_SHOES = 'RECEIVE_ALL_SHOES';
export const RECEIVE_SHOE = 'RECEIVE_SHOE';

const receiveAllShoes = payload => ({
    type: RECEIVE_ALL_SHOES,
    payload
});

const receiveShoe = shoe => ({
    type: RECEIVE_SHOE,
    shoe
});

export const fetchAllShoes = () => dispatch => (
    APIUtil.fetchAllShoes()
        .then(payload => dispatch(receiveAllShoes(payload)))
);

export const fetchShoe = shoeId => dispatch => (
    APIUtil.fetchShoe(shoeId)
        .then(shoe => dispatch(receiveShoe(shoe)))
);

