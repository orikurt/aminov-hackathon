import React from 'react';
import PlayerSchedule from './PlayerSchedule';
import { colors } from '../utils/uiScheme';

const UpcomingGames = (props) => (
    <div style={props.style}>
        <h5 style={{ color: colors.darkGray, textAlign: 'center' }} >Upcoming Games</h5>
        <PlayerSchedule { ...props } schedule={scheduleData}/>
    </div>
)

const scheduleData = [
    {
        date: Date.now(),
        home: "Cleveland Cavaliers",
        away: "Boston Celtics"
    },
    {
        date: Date.now() + parseInt(Math.random() * 500000000, 10),
        home: "Los Angeles Lakers",
        away: "Boston Celtics"
    },
    {
        date: Date.now() + parseInt(Math.random() * 1000000000, 10),
        home: "Golden State Warriors",
        away: "Los Angeles Lakers"
    },    
]

export default UpcomingGames;