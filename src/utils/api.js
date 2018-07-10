import fetch from 'cross-fetch';

const headers = {
    Authorization: "X"
};

const fetch_local = (url, options={}) => {
    return fetch(url, {...options,
        headers
    })
    .then(response => {
        if (!response.ok){
            throw new Error(response.statusText);
        }
        return response.json();
    }).catch(err=>{
        console.warn(err); 
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
    return fetch_local(`/api/offers`, { method: 'POST', body: JSON.stringify(offer)})
    .then(response=>response);
}

export default api;