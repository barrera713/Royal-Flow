import { ADDITEM, INCREMENT, DECREMENT, REMOVEITEM, CARTCOUNT } from '../Actions/Types';

const initialState = {
    cartItems: [],
    cartCount: 0
};


export default function(state = initialState, action) {
    switch(action.type) {

        case ADDITEM:
        console.log('INSIDE REDUCER')
        return {
            ...state,
            cartItems: [...state.cartItems, action.payload]
        };
        case REMOVEITEM: 
        return {
            ...state,
            cartItems: state.cartItems.filter(item => item !== action.payload ) 
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
        case CARTCOUNT:
            console.log('CART COUNT', state.cartCount)
            return {
            ...state, cartCount: state.cartCount + 1
        }
        default:
        return state;
    }
};