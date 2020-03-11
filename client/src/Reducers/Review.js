import { GETITEMREVIEWS, NEWREVIEW } from '../Actions/Types';

const initialState = {
    allItemReviews: [],
    item: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GETITEMREVIEWS:
        return {
            ...state,
            //--------------------- index [1] contains array of review data ----------
            allItemReviews: action.payload[1],
            item: action.payload[0]
        };
        case NEWREVIEW:
        return {
            ...state,
            allItemReviews: [...state.allItemReviews, action.payload]
        }
        default: 
        return state;
    }
};