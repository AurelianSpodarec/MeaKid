import jackets from './../../json/products/jackets';

// const cartReducer = (state = [...jackets], action) => {

const INITIAL_STATE = {
    items: [],
    total: 0,
}

// Total Price of the items
// 

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_ITEM_TO_CART':

            let newItem = state.items.find(item => item.id === action.id)
            if (newItem) {
                return { ...state.item, items: [...state.items, newItem.quantity + 1] }
            }

            return [...state, action.payload];
        case 'DELETE_ITEM':
            return state;
        default:
            return state;
    }
}

export default cartReducer;

// Item details. Selected Size. Quantity.