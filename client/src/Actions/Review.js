import { GETITEMREVIEWS, NEWREVIEW } from './Types';
import axios from 'axios';


const URL = 'http://localhost:5000';
//------------------------------- GET all reviews for an item ---------------------------------------
export const getItemReviews = (id) => {
    return async (dispatch) => { 
        try {
            const result = await axios({
                method: 'get',
                url: `${URL}/reviews/all/${id}`
            })
            console.log('RESULT', result.data)
            dispatch({
                type: GETITEMREVIEWS,
                payload: result.data
            })
        } catch (err) {
            console.log(err)
        }
    }
};

//------------------------------ Create New Review ------------------------------------
export const createReview = (formData, itemId) => {
    console.log(itemId)
    return async (dispatch) => {
        try {
            const newReview = await axios({
                method: 'post',
                url: `${URL}/reviews/new`,
                headers: {'Authorization': sessionStorage.getItem('Bearer')},
                data: {
                    rating: formData.rating,
                    content: formData.content,
                    itemId: itemId
                }
            })
            .then(res => {
                console.log('RESULT', res)
            })
            // dispatch({
            //     type: NEWREVIEW,
            //     payload: newReview
            // })
        } catch (err) {
            console.log(err)
        }
    }
}