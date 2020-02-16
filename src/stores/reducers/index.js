import { combineReducers } from 'redux';

import cartReducer from './cartReducers';

const allReducers = combineReducers({
    cart: cartReducer
})

export default allReducers;