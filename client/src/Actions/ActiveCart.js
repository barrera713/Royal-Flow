import { ADDITEM } from './Types';
import { INCREMENT, DECREMENT, REMOVEITEM, CARTCOUNT } from './Types';

export const addItem = (item) => (dispatch) => {
    dispatch({ 
        type: ADDITEM,
        payload: item
    })
};

export const removeItem = (item) => (dispatch) => {
    dispatch({
        type: REMOVEITEM,
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

export const cartCount = () => (dispatch) => {
    console.log('cartcount action')
    dispatch({
        type: CARTCOUNT
    })
}
