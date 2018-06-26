import * as actions from '../actions/actionNames';

const playersReducer = (state=[], action) => {
    if (action.type === actions.SET_PLAYERS){
        return action.payload;
    }
    return state;
}

export default playersReducer;