import * as actions from '../actions/actionNames';
import { toast } from "react-toastify";

const initialState = {
    isFetching: false,
    lastUpdated: null,
    data: {}
}

const offersReducer = (state=initialState, action) => {
    switch (action.type) {
        case actions.POST_OFFER:
            return {...state, isFetching: true};
            
        case actions.POST_OFFER_SUCCESS:
            toast.success('Offer posted successfuly', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 5000,
            });
            return {...state, isFetching: false};  
        case actions.POST_OFFER_ERROR:
            toast.error(action.payload, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 5000,
            });            
            return {...state, isFetching: false};    
        default:
            return state;
    }
}; 

export default offersReducer;