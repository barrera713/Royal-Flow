import { GETITEMREVIEWS } from './Types';
import axios from 'axios';


const URL = 'http://localhost:5000';

export const getItemReviews = (id) => {
    return async (dispatch) => { 
        try {
            const result = await axios({
                method: 'get',
                url: `${URL}/reviews/all/${id}`
            })
            let reviews = result.data.map(i => i.itemReviews)
            console.log('RESULT', reviews)
            dispatch({
                type: GETITEMREVIEWS,
                payload: reviews
            })
        } catch (err) {
            console.log(err)
        }
    }
};