import { ADDITEM, INCREMENT, DECREMENT, REMOVEITEM, CARTCOUNT, NEWORDER } from './Types';
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
          dispatch({
            type: NEWORDER,
            payload: res.data
          })
          window.alert('Your order has been successfully placed!')
          window.location = '/dashboard'
        })
        .catch(err => {
            console.log(err)
        })
    }
};