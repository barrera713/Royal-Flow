import { ADDITEM } from './Types';
import { INCREMENT, DECREMENT, REMOVEITEM, CARTCOUNT, CHECKOUT } from './Types';
import axios from 'axios';

const URL = 'http://localhost:5000';

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
    dispatch({
        type: CARTCOUNT
    })
}

export const checkoutCart = (total, items) => {
    // let token = sessionStorage.getItem('Bearer');
    return (dispatch) => { 
        axios({
            method: 'post',
            url: `${URL}/cart/new`,
            headers: {'Authorization': sessionStorage.getItem('Bearer')},
            data: {
                total: total,
                items: items
            }
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
        dispatch({
            type: CHECKOUT,
            payload: [total, items]
        })
    }
};