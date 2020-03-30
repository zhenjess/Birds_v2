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