import { combineReducers } from 'redux';
import players from './players';
import selectedPlayer from './selectedPlayer';
import selectedStock from './selectedStock';
import stocks from './stocks';
import layout from './layout';

const rootReducer = combineReducers({
    stocks,
    players,
    selectedPlayer,
    selectedStock,
    layout
});

export default rootReducer;