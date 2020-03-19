import { GETITEMREVIEWS, NEWREVIEW, DELETEREVIEW } from '../Actions/Types';

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
            case DELETEREVIEW:
                console.log('reducer reviews', state.allItemReviews)
            return {
                ...state,
                allItemReviews: state.allItemReviews.filter(i => i.review.id !== action.payload)
            }
        default: 
        return state;
    }
};