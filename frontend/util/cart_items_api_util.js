export const fetchCartItems = (cartId) => {
    return $.ajax({
        url: `/api/cart_items`,
        method: 'GET',
        data: { cartId }
    })
}

export const createCartItem = (cartItem) => {

    return $.ajax({
        url: `/api/cart_items`,
        method: 'POST',
        data: { cartItem }
    })
}

export const updateCartItem = (cartItem) => {
    return $.ajax({
        url: `/api/cart_items/${cartItem.id}`,
        method: "PATCH",
        data: { cartItem }
    })
}

export const deleteCartItem = (cartItemId) => {
    return $.ajax({
        url: `/api/cart_items/${cartItemId}`,
        method: 'DELETE'
    })
}

