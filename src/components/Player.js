import React, { Component } from 'react';
import PlayerCard from '../components/PlayerCard';

class Player extends Component {
    componentDidMount(){
    }
    render(){
        if (this.props.player == null){
            return (<h3>No player selected</h3>)
        }
        return (
        <div>
            <PlayerCard {...this.props}/>
        </div>
    )}
};

export default Player;