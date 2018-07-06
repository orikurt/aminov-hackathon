import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Player from '../components/Player';
import PlayersList from '../components/PlayersList';
import { getStocksList, setSelectedStock } from '../actions/stockCommands';
import { setSelectedPlayer, getPlayersList } from '../actions/playerCommands';
import { Route } from 'react-router-dom';

class Players extends Component {

    render() { 
        return (
        <div>
            
            <Route path="/players" exact={true} component={(_props) => {
                this.props.getPlayersList();
                this.props.getStocksList();                
                const data = [];
                for (let uid in this.props.players){
                    data.push({...this.props.players[uid], ...this.props.stocks[uid]});
                }
                return (
                <div style={{padding: '0 15px'}}>
                    <h2>Players</h2>
                    <PlayersList players={data} />
                </div>
            )}} />

            <Route path="/players/:playerId" component={(props)=>{
                this.props.setSelectedPlayer(props.match.params.playerId);
                this.props.setSelectedStock(props.match.params.playerId);
                return ( <Player player={ this.props.selectedPlayer } stock={ this.props.selectedStock } /> )
            }} />
        </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        players: state.players.data,
        stocks: state.stocks.data,
        selectedPlayer: state.selectedPlayer.data,
        selectedStock: state.selectedStock.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getPlayersList,
        getStocksList,
        setSelectedPlayer,
        setSelectedStock
    }, dispatch);
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Players);
  