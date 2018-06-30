import fetch from 'cross-fetch';

const headers = {
    Authorization: "X"
};

const fetch_local = (url) => {
    return fetch(url, {
        headers
    })
    .then(response => {
        if (!response.ok){
            throw new Error(response.statusText);
        }
        return response.json();
    }).catch(err=>Promise.reject(err));
}

const api = {};

api.getPlayers = () => {
    return fetch_local('/api/players')
    .then(response=>response.players);
}

api.getPlayer = (playerId) => {
    return fetch_local(`/api/players/${playerId}`)
    .then(response=>response.player);
}

export default api;