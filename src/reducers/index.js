import { combineReducers } from 'redux';
import players from './players';
import selectedPlayer from './selectedPlayer';
import layout from './layout';

const rootReducer = combineReducers({
    players,
    selectedPlayer,
    layout
});

export default rootReducer;