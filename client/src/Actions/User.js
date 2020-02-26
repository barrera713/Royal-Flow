import { LOGIN } from './Types';
import axios from 'axios';
import history from '../history';

const URL = 'http://localhost:5000';

export const loginUser = (formData) => (dispatch) => {    
   
    axios.post(`${URL}/user/login`, formData,
    {headers: {'Accept': 'application/json'}})
    .then(res => {
        sessionStorage.setItem('Bearer', res.data.Bearer);
        dispatch({
            type: LOGIN,
            payload: res
        })
    })
    .then( history.push('/'))
    .catch(err => {
        if(err) {
            console.log('POOPIE', err.response)
        }
    })
    
};

