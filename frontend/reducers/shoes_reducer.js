import {
    RECEIVE_ALL_SHOES,
    RECEIVE_SHOE
} from '../actions/shoes_actions';

import {
    FILTER_BY_COLOR,
    FILTER_BY_STYLE,
    FILTER_BY_MATERIAL
} from '../actions/filter_shoes_actions';

const shoesReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    let shoeKeyOfIds = Object.keys(oldState); // arr of shoe ids


    switch(action.type) {
        case RECEIVE_ALL_SHOES:
            /*
            shoes state: 2 POJOS {"allshoes"}, {"filtered shoes per categ"}
            */
          // debugger
            // return Object.assign({}, oldState, action.payload.shoes);
            return action.payload.shoes;
        case RECEIVE_SHOE:
            shoe = action.shoe;
            const newShoe = { [action.shoe.id]: action.shoe };
            return Object.assign({}, oldState, newShoe);

        case FILTER_BY_COLOR:

            let shoesFilteredByColor = [];

            for (let i = 0; i < shoeKeyOfIds.length; i++) {
                let id = parseInt(shoeKeyOfIds[i]); //ex. "76"
                if (!isNaN(id)) { //before hit 'red' shoes global state doesn't have filter, when hit red, there is a filter at end
                    // let shoe = oldState[id]; //is shoe object:
                    if (oldState[id].color === action.payload) { //action.payload === 'black'
                        shoesFilteredByColor.push(oldState[id]); //arr of shoe objects
                    }
                }
                //debugger
            }
         //   debugger
            newState["filtered"] = shoesFilteredByColor;
            return newState;    //have all shoes and filtered shoes
                // {76:
                // color: "Grey"
                // gender: "Men"
                // id: 76
                // material: "Wool"
                // photoUrl: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBVUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--91287bfc32e4e0e91af96c211a28f986eca0279f/men_grey_wool_runners.webp"
                // size: (6)[7, 8, 9, 10, 11, 12]
                // style: "Runners"
                // __proto__: Object}
            
            // debugger
            // shoes state: {allshoes}, "filtered": [all shoes matching that filter] array of shoe obj elements
        case FILTER_BY_STYLE:

            let shoesFilteredByStyle = [];

            for (let i = 0; i < shoeKeyOfIds.length; i++) {
                let id = parseInt(shoeKeyOfIds[i]); //ex. "76"
                if (!isNaN(id)) { //before hit 'red' shoes global state doesn't have filter, when hit red, there is a filter at end
                    // let shoe = oldState[id]; //is shoe object:
                    if (oldState[id].style === action.payload) { //action.payload === 'black'
                        shoesFilteredByStyle.push(oldState[id]); //arr of shoe objects
                    }
                }
                //debugger
            }
            //   debugger
            newState["filtered"] = shoesFilteredByStyle;
            return newState;    //have all shoes and filtered shoes

        case FILTER_BY_MATERIAL:

            let shoesFilteredByMaterial = [];

            for (let i = 0; i < shoeKeyOfIds.length; i++) {
                let id = parseInt(shoeKeyOfIds[i]); //ex. "76"
                if (!isNaN(id)) { //before hit 'red' shoes global state doesn't have filter, when hit red, there is a filter at end
                    // let shoe = oldState[id]; //is shoe object:
                    if (oldState[id].material === action.payload) { //action.payload === 'black'
                        shoesFilteredByMaterial.push(oldState[id]); //arr of shoe objects
                    }
                }
                //debugger
            }
            //   debugger
            newState["filtered"] = shoesFilteredByMaterial;
            return newState;    //have all shoes and filtered shoes
        default:
            return oldState;
    }
};

export default shoesReducer;


//         case FILTER_BY_STYLE:
// let shoesFilteredByStyle = [];
// let shoeStyleKeys = Object.keys(oldState);
// for (let i = 0; i < shoeStyleKeys.length; i++) {
//     let id = shoeStyleKeys[i];
//     let shoe = oldState.shoes[id]; //is shoe object
// }

// if (shoe.style === action.payload.style) {
//     shoesFilteredByStyle.push(shoe);
// }
// return shoesFilteredByStyle;
//         case FILTER_BY_MATERIAL:
// // look through all shoes in the oldstate
// // find shoes that match action.payload.material
// // return an object with all the shoes that match
// let shoesFilteredByMaterial = [];
// let shoeMaterialKeys = Object.keys(oldState);
// for (let i = 0; i < shoeMaterialKeys.length; i++) {
//     let id = shoeMaterialKeys[i];
//     let shoe = oldState.shoes[id]; //is shoe object
// }

// if (shoe.material === action.payload.material) {
//     shoesFilteredByMaterial.push(shoe);
// }
// return shoesFilteredByMaterial;