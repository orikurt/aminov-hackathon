import React, { Component } from 'react';
import PlayerCard from '../components/PlayerCard';

class Player extends Component {
    componentDidMount(){
        console.log(this.props);
    }
    render(){
        if (this.props.player == null){
            return (<h3>No player selected</h3>)
        }
        return (
        <div>
            <PlayerCard player={this.props.player}/>
        </div>
    )}
};

export default Player;