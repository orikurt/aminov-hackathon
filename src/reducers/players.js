import * as actions from '../actions/actionNames';

const initialState = {
    isFetching: false,
    data: {},
    stats: {},
    list: [],
    playersList: [],
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
            const newState = {...state, isFetching: false, lastUpdated: Date.now(), list: action.payload, data: action.payload.reduce((players, player)=>{
                players[player.uid] = players[player.uid] || player;
                return players;
            }, {...state.data})}  
            return newState;
        
        case actions.SET_PLAYER:
            const { stats, ...player } = action.payload;
            state.stats[action.payload.uid] = stats;
            state.data[action.payload.uid] = player;
            return state;
        
        default:
            return state;
    }
}

export default playersReducer;