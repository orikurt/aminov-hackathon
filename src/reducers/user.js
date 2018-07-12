import * as actions from '../actions/actionNames';

const initialState = {
    isFetching: false,
    lastUpdated: null,
    data: {}
}

export default function users(state=initialState, action){
    switch(action.type){
        case actions.FETCH_USER:
        case actions.POST_REGISTRATION:
            return { ...state, isFetching: true }
        
        case actions.FETCH_USER_ERROR:
        case actions.REGISTER_ERROR:
            return { ...state, isFetching: false }

        case actions.SET_USER:
        case actions.REGISTER_SUCCESS:
            return { ...state, data: action.payload, lastUpdated: Date.now(), isFetching: false }
            
        default:
            return state;
    }
}