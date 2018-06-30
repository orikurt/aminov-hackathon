import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Player from './Player';
import { getPlayers } from '../actions/index';
import { Link, Route } from 'react-router-dom';

class PlayersList extends Component {

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
                    {
                        Object.keys(this.props.players).map((playerId, i)=> {
                            const player = this.props.players[playerId];
                            return(
                                <Link key={i} to={props.match.url + "/" + player.uid}>
                                    <div> {player.name} </div>
                                </Link>
                            )
                        })
                    }
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
  
export default connect(mapStateToProps, mapDispatchToProps)(PlayersList);
  