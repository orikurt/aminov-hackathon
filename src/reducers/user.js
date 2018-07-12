import * as actions from '../actions/actionNames';

const initialState = {
    isFetching: false,
    lastUpdated: null,
    data: {}
}

export default function users(state=initialState, action){
    switch(action.type){
        default:
            return state;
    }
}