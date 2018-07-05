import * as actions from '../actions/actionNames'

const initialState = {
    player: null,
    lastUpdated: null,
    isFetching: false
}

const selectedPlayer = (state=initialState, action) => {
    switch (action.type){
        case actions.SET_PLAYER:
            return {
                player: action.payload,
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