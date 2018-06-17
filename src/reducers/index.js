import { combineReducers } from 'redux';
import players from './players';

const rootReducer = combineReducers({
    players: players
});

export default rootReducer;