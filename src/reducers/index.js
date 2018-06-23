import { combineReducers } from 'redux';
import players from './players';
import selectedPlayer from './selectedPlayer';

const rootReducer = combineReducers({
    players,
    selectedPlayer
});

export default rootReducer;