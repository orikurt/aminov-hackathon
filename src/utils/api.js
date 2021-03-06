import fetch from 'cross-fetch';

const headers = {
    Authorization: "X",
    "Content-Type": "application/json"
};

const fetch_local = (url, options={}) => {
    return fetch(url, {...options,
        headers
    })
    .then(response => {
        if (response.ok){
            return response.json();
        }
        return response.json()
            .then(data=>{ throw new Error(data.message) });
    }).catch(err=>{
        return Promise.reject(err)}
    );
}

const api = {};

api.getPlayersList = () => {
    return fetch_local('/api/players')
    .then(response=>response.players);
}

api.getPlayer = (playerId) => {
    return fetch_local(`/api/players/${playerId}`)
    .then(response=>response.player);
}

api.getStocksList = () => {
    return fetch_local('/api/stocks')
    .then(response=>response.stocks);
}

api.getStock = (stockId) => {
    return fetch_local(`/api/stocks/${stockId}`)
    .then(response=>response.stock);
}

api.postOffer = (offer) => {
    return fetch_local(`/api/offers`, { method: 'POST', body: JSON.stringify({ offer })});
}

api.register = (userForm) => {
    return fetch_local('/api/users/register', {method: 'POST', body: JSON.stringify(userForm)});    
}

api.getLogin = () => {
    return fetch_local('/api/users/login');
}

api.postLogin = (credentials) => {
    return fetch_local('/api/users/login', {method: 'POST', body: JSON.stringify(credentials)});
}

api.postLogout = () => {
    return fetch_local('/api/users/logout', {method: 'POST'});
}

api.postForgotPassword = (credentials) => {
    return fetch_local('/api/users/forgotpassword', {method: 'POST', body: JSON.stringify(credentials)});
}

export default api;