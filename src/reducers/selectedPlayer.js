import * as actions from '../actions/actionNames'

const initialState = {
    id: null,
    lastUpdated: null,
    isFetching: false
}

const selectedPlayer = (state=initialState, action) => {
    switch (action.type){
        case actions.SET_PLAYER:
            return {
                ...state,
                id: action.payload.uid,
                lastUpdated: Date.now(),
                isFetching: false
            }
        
        case actions.FETCH_PLAYER:
            return {...state, isFetching: true};

        case actions.FETCH_PLAYER_ERROR:
            return {...state, isFetching: false};
        
        default:
            return state;
    }
};

export default selectedPlayer;