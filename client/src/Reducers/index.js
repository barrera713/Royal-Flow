import { combineReducers } from 'redux';
import ItemReducer from './Item';
import UserReducer from './User';
import ActiveCart from './ActiveCart';
import SearchBar from './SearchBar';
import Orders from './Orders';
import Reviews from './Review';

export const reducers = combineReducers({
    items: ItemReducer,
    user: UserReducer,
    cart: ActiveCart,
    searchTerm: SearchBar,
    userOrders: Orders,
    itemReviews: Reviews
});