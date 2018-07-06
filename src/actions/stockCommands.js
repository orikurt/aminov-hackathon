import * as actions from './index';

export const getStocksList = () => (dispatch, getState, api) => {
    const { stocks } = getState();
    if (stocks.isFetching || stocks.lastUpdated){
        return;
    }
    else{
        dispatch(actions.fetchStocks());
        api.getStocksList().then(stocks=>dispatch(actions.setStocks(stocks), err=>dispatch(actions.fetchStocksError(err))))
    }
}