import * as actions from '../actions/actionNames';

const initialState = {
    isFetching: false,
    lastUpdated: null,
    data: {}
}

const offersReducer = (state=initialState, action) => {
    switch (action.type) {
        case actions.POST_OFFER_ERROR:
            return {...state, isFetching: false};
    
        default:
            return state;
    }
}; 

export default offersReducer;