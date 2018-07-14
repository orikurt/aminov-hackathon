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

export const postOffer = (offer) => {
    return {
        type: actions.POST_OFFER,
        payload: offer
    }
}

export const postOfferSuccess = (offer) => {
    return {
        type: actions.POST_OFFER_SUCCESS,
        payload: offer
    }
}

export const postOfferError = (error) => {
    return {
        type: actions.POST_OFFER_ERROR,
        payload: error
    }
}

export const setUser = (user) => {
    return {
        type: actions.SET_USER,
        payload: user
    }
}

export const fetchUser = (credentials) => {
    return {
        type: actions.FETCH_USER,
        payload: credentials
    }
}

export const fetchUserSuccess = (user) => {
    return {
        type: actions.FETCH_USER_SUCCESS,
        payload: user
    }
}

export const fetchUserError = (error) => {
    return {
        type: actions.FETCH_USER_ERROR,
        payload: error
    }
}

export const postRegistration = (userForm) => {
    return {
        type: actions.POST_REGISTRATION,
        payload: userForm
    }
}

export const registrationError = (error) => {
    return {
        type: actions.REGISTER_ERROR,
        payload: error
    }
}

export const registrationSuccess = (user) => {
    return {
        type: actions.REGISTER_SUCCESS,
        payload: user
    }
}

export const postLogin = (userForm) => {
    return {
        type: actions.POST_LOGIN,
        payload: userForm
    }
}

export const loginError = (error) => {
    return {
        type: actions.LOGIN_ERROR,
        payload: error
    }
}

export const loginSuccess = (user) => {
    return {
        type: actions.LOGIN_SUCCESS,
        payload: user
    }
}

export const postLogout = (userForm) => {
    return {
        type: actions.POST_LOGOUT,
        payload: userForm
    }
}

export const logoutError = (error) => {
    return {
        type: actions.LOGOUT_ERROR,
        payload: error
    }
}

export const logoutSuccess = (user) => {
    return {
        type: actions.LOGOUT_SUCCESS,
        payload: user
    }
}

export const postForgotPassword = (userForm) => {
    return {
        type: actions.POST_FORGOT_PASSWORD,
        payload: userForm
    }
}

export const forgotPasswordError = (error) => {
    return {
        type: actions.FORGOT_PASSWORD_ERROR,
        payload: error
    }
}

export const forgotPasswordSuccess = () => {
    return {
        type: actions.FORGOT_PASSWORD_SUCCESS,
    }
}

export const signInRedirect = (path) => {
    return {
        type: actions.SIGNIN_REDIRECT,
        payload: path
    }
}