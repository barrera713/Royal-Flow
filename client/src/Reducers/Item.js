import { FETCHDATA } from '../Actions/Types';

const initialState = {
    allItems: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCHDATA:
            console.log('Inside data reducer')
        return {
            ...state,
            allItems: action.payload
        };
        default: 
        return state;
    }
};