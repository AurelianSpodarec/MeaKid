const cartReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload];
        case 'SUBTRACT':
            return state - 1;
        default:
            return state;
    }
}

export default cartReducer;