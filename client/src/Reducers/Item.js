import { ALLDATA } from '../Actions/Types';

const initialState = {
    allItems: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case ALLDATA:
        return {
            ...state,
            allItems: action.payload
        };
        default: 
        return state;
    }
};