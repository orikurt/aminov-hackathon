import * as actions from './actionNames';

export const selectPlayer = (player) => {
    return {
        type: actions.SELECT_PLAYER,
        payload: player
    }
}