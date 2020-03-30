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

export const filterAllShoesByColor = () => dispatch => (
    store.filterAllShoesByColor()
        .then(payload => dispatch(filterByColor(payload)))
);

export const filterAllShoesByStyle = () => dispatch => (
    store.filterAllShoesByStyle()
        .then(payload => dispatch(filterByStyle(payload)))
);

export const filterAllShoesByMaterial = () => dispatch => (
    store.filterAllShoesByMaterial()
        .then(payload => dispatch(filterByMaterial(payload)))
);