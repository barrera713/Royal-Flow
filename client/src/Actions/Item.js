import { ALLDATA } from './Types';
import axios from 'axios';

const URL = "https://royal-flow.herokuapp.com";
// const URL = "http://localhost:5000";

export const getAllItems = () => {
    return async (dispatch) => {
        try {
        const items = await axios.get(`${URL}/shop/all-items`)
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

