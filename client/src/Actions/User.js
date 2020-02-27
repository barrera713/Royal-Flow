import { LOGIN } from './Types';
import axios from 'axios';
// import history from '../history';

const URL = 'http://localhost:5000';

export const loginUser = (formData) => {

    return async (dispatch) => {    
   
        try {
            await axios.post(`${URL}/user/login`, formData,
            {headers: {'Accept': 'application/json'}})
            .then(res => {
                sessionStorage.setItem('Bearer', res.data.Bearer);
                dispatch({
                    type: LOGIN,
                    payload: res
                })
                window.location = '/';
            })
        } catch(err) {
            console.log(err)
        };

    }
    
}

