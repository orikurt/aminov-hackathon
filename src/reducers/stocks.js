import * as actions from '../actions/actionNames'

const initialState = {
    isFetching: false,
    lastUpdated: null,
    data: {},
    list: []
};

const stocks = (state=initialState, action) => {
    switch (action.type){
 
        case actions.FETCH_STOCKS:
            return {...state, isFetching: true}
 
        case actions.SET_STOCKS:
            const data = action.payload.reduce((stocks, stock)=>{
                stocks[stock.uid] = stock;
                return stocks;
            }, {...state.data})
            return {
                ...state,
                isFetching: false, 
                lastUpdated: Date.now(),
                data,
                list: action.payload
            }
        
        case actions.SET_STOCK:
            state.data[action.payload.uid] = action.payload;
            return state;

        default:
            return state;
    }
}

export default stocks;