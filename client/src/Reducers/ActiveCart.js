import { ADDITEM, INCREMENT, DECREMENT } from '../Actions/Types';

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
        case INCREMENT:  
        return {
            ...state,
            cartItems: state.cartItems.map(item => { if(item.id === action.payload.id) return { 
                ...item, quantity: item.quantity + 1
            };
            return item })
        };
        case DECREMENT: 
        return {
            ...state,
            cartItems: state.cartItems.map(item => {if(item.id === action.payload.id) return {
                ...item, quantity: item.quantity === 0 ? item.quantity = 0 : item.quantity - 1
            }
            return item })
        }
        default:
        return state;
    }
};