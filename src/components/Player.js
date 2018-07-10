import React from 'react';
import PlayerCard from './PlayerCard';
import PlayerStats from './PlayerStats';
import QuickTrade from './QuickTrade';

const Player = (props) => {
    if (props.player == null){
        return (<h3>No player selected</h3>)
    }
    return (
        <div>
            <PlayerCard {...props} />
            {props.stock ? <QuickTrade stock={props.stock} /> : null}
            <PlayerStats stats={props.player.stats} />
        </div>
    )}

export default Player;