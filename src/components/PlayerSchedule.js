import React from 'react';
import { dateFormat } from '../utils/format';
import { colors } from '../utils/uiScheme';

const PlayerSchedule = (props) => {
    return (
        <div { ...props } style={{ ...containerStyle, ...props.style }}>
            <h5 style={{ color: colors.textLowlight }} >Upcoming Games</h5>
            <div style={ wrapperStyle }>
                { scheduleData.map((game, i)=>(
                    <div style={ gameStyle } key={i}>
                        <label style={{ color: colors.third }}>{  dateFormat(game.date) }</label>
                        <label>{ game.home === props.player.team 
                            ? `vs ${ game.away.split(" ").reverse()[0] }` 
                            : `@ ${ game.home.split(" ").reverse()[0] }`
                        }</label>
                    </div>
                )) }
            </div>
        </div>
    )
}

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

const wrapperStyle = { 
    display: 'flex', 
    justifyContent: 'space-evenly', 
    width: '100%' 
}

const gameStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}

const scheduleData = [
    {
        date: Date.now(),
        home: "Cleveland Cavaliers",
        away: "Boston Celtics"
    },
    {
        date: Date.now(),
        home: "LA Lakers",
        away: "Boston Celtics"
    },
    {
        date: Date.now(),
        home: "Golden State Warriors",
        away: "LA Lakers"
    },    
]

export default PlayerSchedule;