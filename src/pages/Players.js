import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PlayersList from '../components/PlayersList';
import { getStocksList } from '../actions/stockCommands';
import {  getPlayersList } from '../actions/playerCommands';

class Players extends Component {
    
    componentDidMount(){
        this.props.getPlayersList();
        this.props.getStocksList();
    }

    render() { 
        return (
            <div style={{padding: '0 15px'}}>
                <h2>Players</h2>
                <PlayersList players={this.props.playersList.map(
                    (player)=>( {...this.props.players[player.uid], ...this.props.stocks[player.uid] }
                ))} />
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        playersList: state.players.list,
        players: state.players.data,
        stocks: state.stocks.data,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getPlayersList,
        getStocksList,
    }, dispatch);
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Players);
  