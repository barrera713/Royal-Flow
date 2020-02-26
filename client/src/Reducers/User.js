import { LOGIN } from '../Actions/Types';

const initialState = {
    currentUser: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case LOGIN:
            console.log('inside user reducer')
        return {
            ...state,
            currentUser: action.payload
        };
        default: 
        return state;
    }
};