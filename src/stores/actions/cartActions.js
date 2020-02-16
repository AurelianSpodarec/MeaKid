export const addItemToCart = (item) => {
    return {
        type: 'ADD_ITEM_TO_CART',
        payload: item
    }
}

export const removeItemFromCart = (id) => {
    return {
        type: 'REMOVE_ITEM_FROM_CART',
        id
    }
}

export const decreaseItemQuantity = (id) => {
    return {
        type: 'DECREASE_QUANTITY',
        id
    }
}

export const addItemQuantity = (id) => {
    return {
        type: 'ADD_QUANTITY',
        id
    }
}