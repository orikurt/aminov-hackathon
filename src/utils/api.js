import fetch from 'cross-fetch';
import playersMock from './playersMock.json';
import stocksMock from './stocksMock.json';
import statsMock from './stats.json';

const headers = {
    Authorization: "X",
    "Content-Type": "application/json"
};

const fetch_local = (url, options = {}) => {
    return fetch(url, {
        ...options,
        headers
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return response.json()
                .then(data => { throw new Error(data.message) });
        }).catch(err => {
            return Promise.reject(err)
        }
        );
}

const api = {};

api.getPlayersList = () => {
    // return fetch_local('/api/players')
    // .then(response=>response.players);

    return new Promise((resolve, reject) => {
        resolve(playersMock.players);
    });
}

api.getPlayer = (playerId) => {
    // return fetch_local(`/api/players/${playerId}`)
    // .then(response=>response.player);

    return new Promise((resolve, reject) => {
        const playerIDs = playersMock.players.map((player) => player.uid);
        const i = playerIDs.indexOf(playerId);
        if (i>-1) {
            resolve({
                ...playersMock.players[i],
                stats: statsMock.stats
            });
        }
        else {
            reject(false);
        }
    });
}

api.getStocksList = () => {
    // return fetch_local('/api/stocks')
    //     .then(response => response.stocks);

    return new Promise((resolve, reject) => {
        resolve(stocksMock.stocks);
    });
}

api.getStock = (stockId) => {
    // return fetch_local(`/api/stocks/${stockId}`)
    //     .then(response => response.stock);

    return new Promise((resolve, reject) => {
        const stockIDs = stocksMock.stocks.map((stock) => stock.uid);
        const i = stockIDs.indexOf(stockId);
        if (i>-1) {
            resolve(stocksMock.stocks[i]);
        }
        else {
            reject(false);
        }
    });
}

api.postOffer = (offer) => {
    return fetch_local(`/api/offers`, { method: 'POST', body: JSON.stringify({ offer }) });
}

api.register = (userForm) => {
    return fetch_local('/api/users/register', { method: 'POST', body: JSON.stringify(userForm) });
}

api.getLogin = () => {
    return fetch_local('/api/users/login');
}

api.postLogin = (credentials) => {
    return fetch_local('/api/users/login', { method: 'POST', body: JSON.stringify(credentials) });
}

api.postLogout = () => {
    return fetch_local('/api/users/logout', { method: 'POST' });
}

api.postForgotPassword = (credentials) => {
    return fetch_local('/api/users/forgotpassword', { method: 'POST', body: JSON.stringify(credentials) });
}

export default api;