import React, { Component } from 'react';
import { connect } from 'react-redux';
import Styles from './Player.style';


class Player extends Component {
    render(){
        if (this.props.player == null){
            return (<h3>No player selected</h3>)
        }
        return (
        <div style={Styles.player}>
            <h3>{this.props.player.name}</h3>
            <p>Number: {this.props.player.number}</p>
            <p>Team: {this.props.player.team}</p>
        </div>
    )}
};

const mapStateToProps = (state)=>{
    return {
        player: state.selectedPlayer
    }
}

export default connect(mapStateToProps)(Player);