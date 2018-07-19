import React from 'react';
import { dateFormat } from '../utils/format';
import { colors } from '../utils/uiScheme';

const PlayerSchedule = (props) => {
    return (
        <div { ...props } style={{ ...containerStyle, ...props.style }}>
            <div style={ wrapperStyle }>
                { props.schedule.map((game, i)=>(
                    <div style={ gameStyle } key={i}>
                        <label style={{ color: colors.third }}>{  dateFormat(game.date) }</label>
                        <label>{ game.home === props.player.team 
                            ? `vs ${ game.away.split(" ").reverse()[0] }` 
                            : `@ ${ game.home.split(" ").reverse()[0] }`
                        }</label>
                        {( props.performance && props.performance[game.date] )
                            ? ( <div>
                                <span>score</span>
                                <label style={{ fontSize: '16px', color: colors.green }}> { props.performance[game.date] } </label>
                            </div>)
                            : null
                        }
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

export default PlayerSchedule;