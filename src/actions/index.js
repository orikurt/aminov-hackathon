import * as actions from './actionNames';

export const getPlayers = () => (dispatch, getState, api) => {
    const { players } = getState();
    if (players.isFetching || players.data.length){
        return;
    }
    dispatch(fetchPlayers());
    return api.getPlayers().then(players => dispatch(setPlayers(players)), (err)=>fetchPlayersError(err));
}

export const fetchPlayers = () => {
    return {
        type: actions.FETCH_PLAYERS
    }
}

export const fetchPlayersError = (err) => {
    return {
        type: actions.FETCH_PLAYERS_ERROR,
        payload: err
    }
}

export const setPlayers = (players) => {
    return {
        type: actions.SET_PLAYERS,
        payload: players
    }
}

export const setLayout = (layout) => {
    return {
        type: actions.SET_LAYOUT,
        payload: layout
    }
}

export const setSelectedPlayer = (playerId) => (dispatch, getState, api) => {
    const { selectedPlayer } = getState();
    //Already fetched and selected
    if ( selectedPlayer.isFetching || (selectedPlayer.lastUpdated && selectedPlayer.uid === playerId)){
        return;
    }
    // We fetched players
    else if ( getState().players.lastUpdated ){
        dispatch(selectPlayer(getState().players.data[playerId]));
    }
    //Got to fetch
    else {
        api.getPlayer(playerId).then(player => dispatch(selectPlayer(player)), (err)=>dispatch(fetchPlayerError(err)))
    }
}

export const selectPlayer = (player) => {
    return {
        type: actions.SELECT_PLAYER,
        payload: player
    }
}

export const fetchPlayer = () => {
    return {
        type: actions.FETCH_PLAYER
    }
}

export const fetchPlayerError = (err) => {
    return {
        type: actions.FETCH_PLAYER_ERROR,
        payload: err
    }
}
