import * as actions from './actionNames';

export const selectPlayer = (player) => {
    return {
        type: actions.SELECT_PLAYER,
        payload: player
    }
}

export const setLayout = (layout) => {
    return {
        type: actions.SET_LAYOUT,
        payload: layout
    }
}