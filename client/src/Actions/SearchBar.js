import { USERINPUT } from './Types';


export const userSearchInput = (input) => (dispatch) => {
    dispatch({
        type: USERINPUT,
        payload: input
    })
};