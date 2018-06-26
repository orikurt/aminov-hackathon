const headers = new Headers({
    Authorization: "X"
});

const fetch_local = (url) => {
    return fetch(url, {
        headers
    })
    .then((response => response.json()))
    .catch(console.warn);
}
export function getPlayers(){
    return fetch_local('/api/market/players')
    .then(response=>response.players);
}