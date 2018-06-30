import * as actions from './actionNames';

export const getPlayers = () => (_dispath, getState, api) => {
    const { players } = getState();
    if ( players.length ){
        return setPlayers(players);
    }
    return api.getPlayers().then(players => setPlayers(players));
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

export const selectPlayer = (player) => {
    return {
        type: actions.SELECT_PLAYER,
        payload: player
    }
}
