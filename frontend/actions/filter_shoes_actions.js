export const FILTER_BY_COLOR = 'FILTER_BY_COLOR';
export const FILTER_BY_STYLE = 'FILTER_BY_STYLE';
export const FILTER_BY_MATERIAL = 'FILTER_BY_MATERIAL';

const filterByColor = payload => ({
    type: FILTER_BY_COLOR,
    payload
});

const filterByStyle = payload => ({
    type: FILTER_BY_STYLE,
    payload
});

const filterByMaterial = payload => ({
    type: FILTER_BY_MATERIAL,
    payload
});

//continue from here
export const filterAllShoesByColor = (payload) => dispatch => {
    //debugger
    return dispatch(filterByColor(payload));
}; //currying here fn returning another fn


export const filterAllShoesByStyle = () => dispatch => (
    store.filterAllShoesByStyle()
        .then(payload => dispatch(filterByStyle(payload)))
);

export const filterAllShoesByMaterial = () => dispatch => (
    store.filterAllShoesByMaterial()
        .then(payload => dispatch(filterByMaterial(payload)))
);