import {
    FILTER_BY_COLOR,
    FILTER_BY_STYLE,
    FILTER_BY_MATERIAL
} from '../actions/filter_shoes_actions';

const shoesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case FILTER_BY_COLOR:
            let shoesFilteredByColor = [];
            let shoeColorKeys = Object.keys(oldState);
            for (let i = 0; i < shoeColorKeys.length; i++) {
                let id = shoeColorKeys[i];
                let shoe = oldState.shoes[id]; //is shoe object
            }

            if (shoe.color === action.payload.color) {
                shoesFilteredByColor.push(shoe);
            }
            return shoesFilteredByColor;
        case FILTER_BY_STYLE:
            let shoesFilteredByStyle = [];
            let shoeStyleKeys = Object.keys(oldState);
            for (let i = 0; i < shoeStyleKeys.length; i++) {
                let id = shoeStyleKeys[i];
                let shoe = oldState.shoes[id]; //is shoe object
            }

            if (shoe.style === action.payload.style) {
                shoesFilteredByStyle.push(shoe);
            }
            return shoesFilteredByStyle;
        case FILTER_BY_MATERIAL:
            // look through all shoes in the oldstate
            // find shoes that match action.payload.material
            // return an object with all the shoes that match
            let shoesFilteredByMaterial = [];
            let shoeMaterialKeys = Object.keys(oldState);
            for (let i = 0; i < shoeMaterialKeys.length; i++) {
                let id = shoeMaterialKeys[i];
                let shoe = oldState.shoes[id]; //is shoe object
            }

            if (shoe.material === action.payload.material) {
                shoesFilteredByMaterial.push(shoe);
            }
            return shoesFilteredByMaterial;
        default:
            return oldState;
    }
};

export default shoesReducer;