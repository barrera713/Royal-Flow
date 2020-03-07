import { NEWORDER, ALLORDERS } from '../Actions/Types';

const initialState = {
    orders: []
};


export default function(state = initialState, action) {
    switch(action.type) {
        case NEWORDER:
            return {
                ...state,
                orders: [...state.orders, action.payload]
            }
        case ALLORDERS: 
            return {
                ...state,
                orders: action.payload
            }
        default:
            console.log('ORDERS REDUCER', state.orders)
        return state;
    }
};