import React, { Component } from 'react';
import PlayerCard from './PlayerCard';
import PlayerStats from './PlayerStats';

class Player extends Component {
    
    componentDidMount(){}

    render(){
        if (this.props.player == null){
            return (<h3>No player selected</h3>)
        }

        return (
        <div>
            <PlayerCard {...this.props}/>
            <PlayerStats stats={this.props.player.stats} />
        </div>
    )}
};

export default Player;