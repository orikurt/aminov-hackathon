import React from 'react';
import PlayerCard from './PlayerCard';
import RealWorldStats from './RealWorldStats';
import QuickTrade from './QuickTrade';
import GameTimeStats from './GameTimeStats';
import MarketStats from './MarketStats';

const Player = (props) => {
    if (props.player == null){
        return (<h3>No player selected</h3>)
    }
    return (
        <div style={containerStyle}>
            <div style={{ minWidth: '350px' }}>
                <PlayerCard {...props} />
            </div>
            <div style={{ flexGrow: 1 }}>
                <GameTimeStats style={ tableStyle } />
                <MarketStats style={ tableStyle } />
            </div>
            <div style={{ minWidth: '350px', fontSize: '100%'}}>
                {props.stock ? <QuickTrade stock={props.stock} /> : null}
            </div>
            <div style={{ width: '100%' }}>
                <RealWorldStats stats={props.player.stats} />
            </div>
        </div>
    )
}

const tableStyle = {
    width: '1000px',
    fontSize: '16px'
}

const containerStyle = {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'start',
    alignItems: 'center'
}

export default Player;