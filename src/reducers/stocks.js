import * as actions from '../actions/actionNames'

const initialState = {
    isFetching: false,
    lastUpdated: null,
    data: {}
};

const stocks = (state=initialState, action) => {
    switch (action.type){
        case actions.SET_STOCKS:
            const data = action.payload.reduce((stocks, stock)=>{
                stocks[stock.uid] = stock;
                return stocks;
            }, {...state.data})
            return {
                ...state,
                isFetching: false, 
                lastUpdated: Date.now(),
                data
            }
        default:
            return state;
    }
}

export default stocks;