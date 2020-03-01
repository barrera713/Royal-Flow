import { ADDITEM } from './Types';
import { INCREMENT } from './Types';

export const addItem = (item) => (dispatch) => {
    dispatch({ 
        type: ADDITEM,
        payload: item
    })
};


export const incrementItem = (item) => (dispatch) => {
    console.log('INSIDEEEEEE ACTION', item)
    dispatch({
        type: INCREMENT,
        payload: item
    })
};