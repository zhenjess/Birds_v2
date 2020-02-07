export const fetchCartItems = (cartId) => {
    return $.ajax({
        url: `/api/cart_items`,
        method: 'GET',
        data: { cartId }
    })
}

export const createCartItem = (cartItem) => {//turn shoe into cart item
    // debugger; 
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

// export const deleteCartItems = (cartId) => {
//     return $.ajax({ // BUG: CSRF failure somewhere so we patchwith below
//         // beforeSend: function (xhr) { xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content')) },
//         url: `/api/carts/${cartId}`,
//         method: 'DELETE'
//     })
    
//     // .then( (res) => {console.log("success", res)}, (err) => {console.log("fail", err)})
// }

//allow delete items from users current cart
export const deleteCartItem = (cartItemId) => {
    //debugger
    return $.ajax({
        url: `/api/cart_items/${cartItemId}`,
        method: 'DELETE'
    })
}

// takes in a cart so that we can fetch items in older carts
// export const fetchCartItems = (user, cart) => {

//     return $.ajax({
//         url: `/api/users/${user.id}/carts/${cart.id}/cart_items`,
//         method: "GET"
//     })
// }

// takes in a cart so that we can fetch items in older carts
// export const fetchCartItem = (user, cart, item) => {

//     return $.ajax({
//         url: `/api/users/${user.id}/carts/${cart.id}/cart_items/${item.id}`,
//         method: "GET"
//     })
// }

// export const createCartItem = (cartItem) => { //turn shoe into cart item
//    // debugger
//     return $.ajax({
//         url: `/api/cart_items`,
//         method: 'POST',
//         data: { cartItem }
//     });
// };

//cart is referenced from user so we can only add items to the users current cart
// export const createCartItem = (user, shoe_id) => {

//     return $.ajax({
//         method: "POST",
//         url: `/api/users/${user.id}/cart/${user.cart.id}/cart_items`,
//         data: { cartItem: {shoe_id} }
//     });
// };


// export const createCartItem = (shoe_id) => { //turn shoe into a cart item
//     return $.ajax({
//         url: `/api/users/${user.cart.id}/cart_items`,
//         method: 'POST', 
//         data: { cartItem: {shoe_id}}
//     });
// };


// //takes in cart and allow fetch items in older cart
// export const fetchCartItems = (user, cart) => {
//     return $.ajax({
//         url: `/api/users/${user.id}/carts/${cart.id}/cart_items`,
//         method: 'GET'
//     })
// }

// //takes in cart to fetch items in older carts
// export const fetchCartItem = (user, cart, item) => {
//     return $.ajax({
//         url: `/api/users/${user.id}/carts/${cart.id}/cart_items/${item.id}`,
//         method: 'GET'
//     })
// }

// //can add items to current users cart
// export const createCartItem = (user, cartItems) => {
//     return $.ajax({
//         url: `/api/users/${user.id}/carts/${user.cart_id}/cart_items`, 
//         method: 'POST', 
//         data: { cartItems } 
//     })
// }

// //can update items in users current cart
// //cartItems as opposed to cartItem since thats what controller params requires
// export const updateCartItem = (user, cartItems) => {
//     return $.ajax({
//         url: `/api/users/${user.id}/carts/${user.cart_id}/cart_items/${cartItems.id}`, 
//         method: 'PATCH', 
//         data: { cartItems }
//     })
// }

// //allow delete items from users current cart
// export const deleteCartItem = (user, item) => {
//     return $.ajax({
//         url: `/api/users/${user.id}/carts/${user.cart_id}/cart_items/${item.id}`,
//         method: 'DELETE'
//     })
// }