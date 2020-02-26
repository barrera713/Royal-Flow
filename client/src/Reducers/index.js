import { combineReducers } from 'redux';
import ItemReducer from './Item';
import UserReducer from './User';

export const reducers = combineReducers({
    items: ItemReducer,
    user: UserReducer
});