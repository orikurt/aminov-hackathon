import * as actions from './index';

export const getStocksList = () => (dispatch, getState, api) => {
    api.getStocksList().then(stocks=>dispatch(actions.setStocks(stocks), err=>dispatch(actions.fetchStocksError(err))))
}