import jackets from './../../json/products/jackets';

const INITIAL_STATE = {
    items: [],
    total: 0,
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_ITEM_TO_CART':

            // let newItem = state.items.find(item => item.id === action.id)
            // if (newItem) {
            //     return { ...state.item, items: [...state.items, newItem.quantity + 1] }
            // }

            return [...state.items, action.payload];
        case 'DELETE_ITEM':
            return state;
        default:
            return state;
    }
}

export default cartReducer;