import { combineReducers } from "redux";

import usersReducer from './users_reducer';

import shoesReducer from './shoes_reducer';

import gendersReducer from './genders_reducer';

import stylesReducer from './styles_reducer';

import sizesReducer from './sizes_reducer';

import materialsReducer from './materials_reducer';

import colorsReducer from './colors_reducer';

import cartItemsReducer from './cart_items_reducer';

import cartsReducer from './carts_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer, 
    shoes: shoesReducer, 
    genders: gendersReducer,
    styles: stylesReducer,
    sizes: sizesReducer,
    materials: materialsReducer, 
    colors: colorsReducer,
    cartItems: cartItemsReducer,
    carts: cartsReducer
});

export default entitiesReducer; 