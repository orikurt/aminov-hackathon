import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setSelectedPlayer } from '../actions/index';

class Player extends Component {
    componentDidMount(){
        this.props.setSelectedPlayer(this.props.match.params.playerId);
    }

    render(){
        if (this.props.player == null){
            return (<h3>No player selected</h3>)
        }
        return (
        <div>
            <h3>{this.props.player.name}</h3>
            <p>Number: {this.props.player.number}</p>
            <p>Team: {this.props.player.team}</p>
        </div>
    )}
};

const mapStateToProps = (state)=>{
    return {
        player: state.selectedPlayer.player
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setSelectedPlayer
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);