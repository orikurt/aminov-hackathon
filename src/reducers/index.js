import { combineReducers } from 'redux';
import players from './players';
import stocks from './stocks';
import selectedPlayer from './selectedPlayer';
import selectedStock from './selectedStock';
import offers from "./offers";
import layout from './layout';

const rootReducer = combineReducers({
    stocks,
    players,
    offers,
    selectedPlayer,
    selectedStock,
    layout
});

export default rootReducer;