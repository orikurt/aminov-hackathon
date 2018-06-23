import * as actions from '../actions/actionNames'

const selectedPlayer = (state=null, action) => {
    if (action.type == actions.SELECT_PLAYER){
        return action.payload;
    }
    return state;
};

export default selectedPlayer;