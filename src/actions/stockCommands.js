import * as actions from './index';

export const getStocksList = () => (dispatch, getState, api) => {
    const { stocks } = getState();
    if (stocks.isFetching || stocks.lastUpdated){
        return;
    }
    else{
        dispatch(actions.fetchStocks());
        api.getStocksList().then(stocks=>dispatch(actions.setStocks(stocks)), err=>dispatch(actions.fetchStocksError(err)));
    }
}

export const setSelectedStock = (stockId) => (dispatch, getState, api) => {
    const { selectedStock } = getState();
    if ( selectedStock.isFetching || (selectedStock.lastUpdated && selectedStock.id === stockId) ){
        return;
    }
    else {
        dispatch(actions.fetchStock(stockId));
        api.getStock(stockId).then(stock=>dispatch(actions.setStock(stock)), err=>dispatch(actions.fetchStockError(err)));
    }
}