export const fetchCart = (id) => { 
    return $.ajax({
        url: `/api/users/${id}/carts`,
        method: 'GET'
    })
}


export const createCart = (user) => {
    return $.ajax({
        url: `/api/users/${user.id}/carts`,
        method: 'POST'
    })
}
