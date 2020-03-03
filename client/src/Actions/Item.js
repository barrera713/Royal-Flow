import { ALLDATA } from './Types';
import axios from 'axios';

const URL = 'http://localhost:5000';

export const getAllItems = () => {
    console.log('inside item action')
    return async (dispatch) => {
        try {
        const items = await axios.get(`${URL}/shop/all-items`)
        dispatch({
            type: ALLDATA,
            payload: items
        })
        } catch (err) {
            console.log(err)
        };
    }
};

