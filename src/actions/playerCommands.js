import * as actions from './index';

export const setSelectedPlayer = (playerId) => (dispatch, getState, api) => {
    const { selectedPlayer, players } = getState();
    //Already fetched and selected
    if ( selectedPlayer.isFetching || (selectedPlayer.lastUpdated && selectedPlayer.data.uid === playerId)){
        return;
    }
    // We fetched players
    else if ( players.lastUpdated && players.data[playerId].stats){
        dispatch(actions.setPlayer(players.data[playerId]));
    }
    //Got to fetch
    else {
        dispatch(actions.fetchPlayer(playerId));
        api.getPlayer(playerId).then(player => dispatch(actions.setPlayer(player)), (err)=>dispatch(actions.fetchPlayerError(err)));
    }
}

export const getPlayersList = () => (dispatch, getState, api) => {
    const { players } = getState();
    if (players.isFetching || players.lastUpdated){
        return;
    }
    dispatch(actions.fetchPlayers());
    return api.getPlayersList().then(players => dispatch(actions.setPlayers(players)), (err)=>dispatch(actions.fetchPlayersError(err)));
}
