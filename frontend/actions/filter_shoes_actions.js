export const FILTER_BY_COLOR = 'FILTER_BY_COLOR';
export const FILTER_BY_STYLE = 'FILTER_BY_STYLE';
export const FILTER_BY_MODEL = 'FILTER_BY_MODEL';

const filterByColor = payload => ({
    type: FILTER_BY_COLOR,
    payload
});

const filterByStyle = payload => ({
    type: FILTER_BY_STYLE,
    payload
});

const filterByModel = payload => ({
    type: FILTER_BY_MODEL,
    payload
});

export const filterAllShoesByColor = () => dispatch => (
    store.filterAllShoesColor()
        .then(payload => dispatch(filterByColor(payload)))
);

export const filterAllShoesByStyle = () => dispatch => (
    store.filterAllShoesByStyle()
        .then(payload => dispatch(filterByStyle(payload)))
);

export const filterAllShoesByModel = () => dispatch => (
    store.filterAllShoesByModel()
        .then(payload => dispatch(filterByModel(payload)))
);