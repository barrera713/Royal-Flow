import { ADDITEM } from '../Actions/Types';

const initialState = {
    cartItems: []
};


export default function(state = initialState, action) {
    switch(action.type) {
        case ADDITEM:
            console.log('INSIDE REDUCER')
        return {
            ...state,
            cartItems: [...state.cartItems, action.payload]
        };
        default:
        return state;
    }
};