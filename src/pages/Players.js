import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Player from '../components/Player';
import PlayersList from '../components/PlayersList';
import { getPlayers } from '../actions/index';
import { getStocksList } from '../actions/stockCommands';
import { Route } from 'react-router-dom';

class Players extends Component {

    componentDidMount(){
        if (!this.props.match.params.playerId){
            this.props.getPlayers();
            this.props.getStocksList();
        }
    }

    render() { 
        return (
        <div>
            <Route path="/players" exact={true} render={(_props) => {
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
            <Route path="/players/:playerId" component={Player} />
        </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        players: state.players.data,
        stocks: state.stocks.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getPlayers,
        getStocksList
    }, dispatch);
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Players);
  