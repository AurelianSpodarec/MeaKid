export const addItem = (item) => {
    return {
        type: 'ADD_ITEM',
        payload: item
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}