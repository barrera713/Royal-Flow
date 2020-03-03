import { USERINPUT } from '../Actions/Types';

const initialState = {
    searchInput: ''
};


export default function(state = initialState, action) {
    switch(action.type) {
        case USERINPUT:
        return {
            ...state,
            searchInput: action.payload
        };
        default:
        return state
    }
};