import { ADDITEM } from './Types';
import { INCREMENT, DECREMENT } from './Types';

export const addItem = (item) => (dispatch) => {
    dispatch({ 
        type: ADDITEM,
        payload: item
    })
};


export const incrementItem = (item) => (dispatch) => {
    dispatch({
        type: INCREMENT,
        payload: item
    })
};

export const decrementItem = (item) => (dispatch) => {
    dispatch({
        type: DECREMENT,
        payload: item
    })
};