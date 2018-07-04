import * as actions from '../actions/actionNames';

const initialState = {
    isFetching: false,
    data: [],
    lastUpdated: null
}

const playersReducer = (state=initialState, action) => {
    switch (action.type){
        case actions.FETCH_PLAYERS:
            return {...state, isFetching: true};
        case actions.FETCH_PLAYERS_ERROR:
            console.warn(action.payload)
            return {...state, isFetching: false};
        case actions.SET_PLAYERS:
            const newState = {isFetching: false, lastUpdated: Date.now(), data: action.payload.reduce((players, player) => {
                players[player.uid] = player;
                return players;
            }, {})};
            console.log(newState);
            return newState;
        default:
            return state;
    }
}

export default playersReducer;