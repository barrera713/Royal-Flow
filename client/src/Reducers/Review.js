import { GETITEMREVIEWS } from '../Actions/Types';

const initialState = {
    allItemReviews: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GETITEMREVIEWS:
            console.log('Inside reviews reducer')
        return {
            ...state,
            allItemReviews: action.payload
        };
        default: 
        return state;
    }
};