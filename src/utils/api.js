const headers = new Headers({
    Authorization: "X"
});

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
export function getPlayers(){
    return fetch_local('/api/players')
    .then(response=>response.players);
}