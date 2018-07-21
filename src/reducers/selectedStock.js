import * as actionNames from '../actions/actionNames';

const initialState = {
    id: null,
    lastUpdated: null,
    isFetching: false,
}

const selectedStock = (state=initialState, action) => {
    switch (action.type){

        case actionNames.FETCH_STOCK:
            return {...state, isFetching: true}
        
        case actionNames.FETCH_STOCK_ERROR:
            return {...state, isFetching: false}
        
        case actionNames.SET_STOCK:
            return {...state, isFetching: false, lastUpdated: Date.now(), id: action.payload.uid }
        default:
            return state;
    }
};

export default selectedStock;