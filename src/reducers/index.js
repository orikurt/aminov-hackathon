import { combineReducers } from 'redux';
import players from './players';
import selectedPlayer from './selectedPlayer';
import stocks from './stocks';
import layout from './layout';

const rootReducer = combineReducers({
    stocks,
    players,
    selectedPlayer,
    layout
});

export default rootReducer;