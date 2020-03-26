import { ALLORDERS, ORDERDETAILS } from './Types';
import axios from 'axios';

const URL = 'http://localhost:5000';

export const getUserOrders = () => {
    return async (dispatch) => { 
        try {
            const orders = await axios({
                method: 'get',
                url: `${URL}/cart/orders`,
                headers: {'Authorization': sessionStorage.getItem('Bearer')},
            })
            dispatch({
                type: ALLORDERS,
                payload: orders.data
            })
        } catch (err) {
            console.log(err)
        }
    }
};

export const getItemsFromOrder = (id) => {
    // console.log('ID', id)
    return async (dispatch) => { 
        try {
            await axios({
                method: 'get',
                url: `${URL}/cart/order/items/${id}`,
                headers: {'Authorization': sessionStorage.getItem('Bearer')},
            })
            .then(res => {
                // console.log('response', res)
                let items = res.data.map(i => i.items)
                dispatch({
                    type: ORDERDETAILS,
                    payload: items
                })
            })
        } catch (err) {
            console.log(err)
        }
    }
};


