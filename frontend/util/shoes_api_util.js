export const fetchAllShoes = () => {
    return $.ajax({
        url: '/api/shoes',
        method: 'GET'
    });
};

export const fetchShoe = (shoeId) => {
    return $.ajax({
        url: `/api/shoes/${shoeId}`,
        method: 'GET'
    });
};