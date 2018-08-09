import React from 'react';
import PlayerSchedule from './PlayerSchedule';
import { colors } from '../utils/uiScheme';

const scheduleData = [
    {
        date: Date.now() - parseInt(Math.random() * 200000000, 10),
        home: "San Antonio Spurs",
        away: "Orlando Magic"
    },
    {
        date: Date.now() - parseInt(Math.random() * 500000000, 10),
        home: "Los Angeles Lakers",
        away: "Boston Celtics"
    },
    {
        date: Date.now() - parseInt(Math.random() * 1000000000, 10),
        home: "Golden State Warriors",
        away: "Los Angeles Lakers"
    },
]

let scores = {};

scheduleData.reduce( (scores, game) => {
    scores[game.date] = Math.round(Math.random() * 200);
    return scores;
}, scores);

const UpcomingGames = (props) => {    
    return(
    <div>
        <h5 style={{ color: colors.darkGray, textAlign: 'center' }} >Recent Games</h5>
        <PlayerSchedule { ...props } schedule={scheduleData} performance={scores}/>
    </div>
)};


export default UpcomingGames;