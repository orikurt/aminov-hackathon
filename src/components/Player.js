import React, { Component } from 'react';
import PlayerCard from './PlayerCard';
import StatsTable from './StatsTable';

class Player extends Component {
    componentDidMount(){
    }
    render(){
        if (this.props.player == null){
            return (<h3>No player selected</h3>)
        }
        const data = [];
        for (let season in this.props.player.stats.per_game){
            data.push({...this.props.player.stats.totals[season], season: season})
        }
        return (
        <div>
            <PlayerCard {...this.props}/>
            <StatsTable data={data} />
        </div>
    )}
};

export default Player;