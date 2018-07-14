import React from 'react';
import PlayerCard from './PlayerCard';
import RealWorldStats from './RealWorldStats';
import QuickTrade from './QuickTrade';

const Player = (props) => {
    if (props.player == null){
        return (<h3>No player selected</h3>)
    }
    return (
        <div>
            <PlayerCard {...props} />
            {props.stock ? <QuickTrade stock={props.stock} /> : null}
            <div>
                <RealWorldStats stats={props.player.stats} />
            </div>
        </div>
    )}

export default Player;