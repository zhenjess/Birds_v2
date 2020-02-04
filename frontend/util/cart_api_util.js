export const fetchCart = (user, cartId) => {
    return $.ajax({
        url: `/api/users/${user.id}/carts/${cartId}`,
        // url: `/api/users/${user.id}/carts`,
        method: 'GET'
    })
}

// export const fetchCart = (user) => {
//     return $.ajax({
//         url: `/api/users/${user.id}`, 
//         method: 'GET'
//     })
// }

export const createCart = (user) => {
    return $.ajax({
        url: `/api/users/${user.id}/carts`,
        method: 'POST'
    })
}




// export const fetchCart = () => {
//     return $.ajax({
//         url: `/api/cart`,
//         method: 'GET'
//     })
// }

// export const fetchCurrentCartID = (user) => {
//     return $.ajax({
//         url: `api/users/${user.id}`,
//         method: 'GET'
//     })
// }

// export const createCart = () => {
//     return $.ajax({
//         url: `/api/cart`,
//         method: 'POST'
//     })
// }
