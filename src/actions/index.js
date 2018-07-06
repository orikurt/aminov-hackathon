import * as actions from './actionNames';

export const fetchPlayers = () => {
    return {
        type: actions.FETCH_PLAYERS
    }
}

export const fetchPlayersError = (err) => {
    return {
        type: actions.FETCH_PLAYERS_ERROR,
        payload: err
    }
}

export const setPlayers = (players) => {
    return {
        type: actions.SET_PLAYERS,
        payload: players
    }
}

export const setLayout = (layout) => {
    return {
        type: actions.SET_LAYOUT,
        payload: layout
    }
}

export const setPlayer = (player) => {
    return {
        type: actions.SET_PLAYER,
        payload: player
    }
}

export const fetchPlayer = () => {
    return {
        type: actions.FETCH_PLAYER
    }
}

export const fetchPlayerError = (err) => {
    return {
        type: actions.FETCH_PLAYER_ERROR,
        payload: err
    }
}

export const fetchStocks = () => {
    return {
        type: actions.FETCH_STOCKS
    }
}

export const fetchStocksError = (err) => {
    return {
        type: actions.FETCH_STOCKS_ERROR,
        payload: err
    }
}

export const setStocks = (stocks) => {
    return {
        type: actions.SET_STOCKS,
        payload: stocks
    }
}

export const fetchStock = (stockId) => {
    return {
        type: actions.FETCH_STOCK,
        payload: stockId
    }
}

export const fetchStockError = (err) => {
    return {
        type: actions.FETCH_STOCK_ERROR,
        payload: err
    }
}

export const setStock = (stock) => {
    return {
        type: actions.SET_STOCK,
        payload: stock
    }
}