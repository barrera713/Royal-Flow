import { ALLORDERS } from './Types';
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
            // console.log(orders.data)
        } catch (err) {
            console.log(err)
        }
    }
};
