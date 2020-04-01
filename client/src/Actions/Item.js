import { ALLDATA } from './Types';
import axios from 'axios';

const URL = "https://cryptic-peak-71800.herokuapp.com"
// const URL = "http://localhost:5000";

export const getAllItems = () => {
    return async (dispatch) => {
        try {
        const items = await axios.get(`${URL}/shop/all-items`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json'
            }
        })
        // console.log('[ITEM ACTION]', items)
        dispatch({
            type: ALLDATA,
            payload: items
        })
        } catch (err) {
            console.log(err)
        };
    }
};

