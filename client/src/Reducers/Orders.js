import { NEWORDER, ALLORDERS, ORDERDETAILS } from '../Actions/Types';

const initialState = {
    orders: [],
    orderDetails: []
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
        case ORDERDETAILS:
            return {
                ...state,
                orderDetails: action.payload
            }
        default:
        return state;
    }
};