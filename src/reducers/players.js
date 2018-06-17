const initialState = [
    {
        name: "MJ",
        team: "Bulls",
        number: "23"
    },
    {
        name: "Kobe",
        team: "Lakers",
        number: "24"
    },
    {
        name: "Steph",
        team: "Warriors",
        number: "30"
    },
    {
        name: "Kawhi",
        team: "Spurs",
        number: "2"
    }
]

const playersReducer = (state=initialState, action) => {
    return state;
}

export default playersReducer;