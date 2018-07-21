export const mockOffers = [
    {price: 42, quantity: 13, type_ask: true}, 
    {price: 33, quantity: 313, type_ask: false}, 
    {price: 12, quantity: 23, type_ask: false}
]

export const chartData = () => {
    let data = [];
    for (let i=0; i<40; i++){
        data.push({
            y: Math.round(Math.random() * 50),
            x: Date.now() - Math.round( Math.random() * 100000000 )
        })
    }
    return data.sort((a, b)=>(a.x - b.x))
};