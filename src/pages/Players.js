import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Player from '../components/Player';
import PlayersList from '../components/PlayersList';
import { getPlayers } from '../actions/index';
import { Route } from 'react-router-dom';

class Players extends Component {

    componentDidMount(){
        if (!this.props.match.params.playerId){
            this.props.getPlayers();
        }
    }

    render() { 
        return (
        <div>
            <Route path="/players" exact={true} render={(props) => (
                <div>
                    <h2>Players</h2>
                    <PlayersList players={this.props.players} />
                </div>
            )} />
            <Route path="/players/:playerId" component={Player} />
        </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        players: state.players.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getPlayers
    }, dispatch);
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Players);
  