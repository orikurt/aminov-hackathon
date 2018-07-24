export const mockOffers = [
    {price: 42, quantity: 13, type_ask: true}, 
    {price: 33, quantity: 313, type_ask: false}, 
    {price: 12, quantity: 23, type_ask: false}
]

export const mockTrades = [
    {price: 40, quantity: 23, date: Date.now() - Math.floor(Math.random() * 10000000)}, 
    {price: 34, quantity: 313, date: Date.now() - Math.floor(Math.random() * 10000000)}, 
    {price: 44, quantity: 130, date: Date.now() - Math.floor(Math.random() * 10000000)}
]

export const mockTrend = {
    high: 42,
    low: 24,
    volume: 6000,
    change: 0.057,
    trades: 880
}

export const chartData = () => {
    let data = [];
    for (let i=0; i<40; i++){
        data.push({
            y: Math.round(Math.random() * 20) + 25,
            x: Date.now() - Math.round( Math.random() * 100000000 )
        })
    }
    return data.sort((a, b)=>(a.x - b.x))
};
