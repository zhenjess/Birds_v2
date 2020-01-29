import * as APIUtil from '../util/shoes_api_util';

// import { fetchAllShoes, fetchShoe } from '../util/shoes_api_util';

export const RECEIVE_ALL_SHOES = 'RECEIVE_ALL_SHOES';
export const RECEIVE_SHOE = 'RECEIVE_SHOE';

const receiveAllShoes = payload => ({
    type: RECEIVE_ALL_SHOES,
    //don't only have shoes as we have info on materials and shoeMaterials
    payload
});

const receiveShoe = shoe => ({
    type: RECEIVE_SHOE,
    shoe
});

export const fetchAllShoes = () => dispatch => (
    APIUtil.fetchAllShoes()
    //shoe data or payload to consider additional info material and shoeMaterial
        .then(payload => dispatch(receiveAllShoes(payload))) //shoeData
);

export const fetchShoe = shoeId => dispatch => (
    APIUtil.fetchShoe(shoeId)
        .then(shoe => dispatch(receiveShoe(shoe)))
);

