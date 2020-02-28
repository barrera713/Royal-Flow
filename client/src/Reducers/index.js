import { combineReducers } from 'redux';
import ItemReducer from './Item';
import UserReducer from './User';
import ActiveCart from './ActiveCart';

export const reducers = combineReducers({
    items: ItemReducer,
    user: UserReducer,
    cart: ActiveCart
});