import * as actions from '../actions/actionNames';
import { toast } from "react-toastify";

const initialState = {
    isFetching: false,
    lastUpdated: null,
    data: {}
}

const offersReducer = (state=initialState, action) => {
    switch (action.type) {
        case actions.POST_OFFER_ERROR:
            toast.error(action.payload, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 5000
            });            
            return {...state, isFetching: false};    
        default:
            return state;
    }
}; 

export default offersReducer;