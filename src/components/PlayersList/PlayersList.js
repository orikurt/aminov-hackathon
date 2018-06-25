import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Player from '../Player/Player';
import { selectPlayer } from '../../actions/index';
import Styles from '../../Styles'
import { Link, Route } from 'react-router-dom';

class PlayersList extends Component {
    clickHandler = ()=>{}
    state = {
        newName: "Lebron"
    }
    componentDidMount(){
        console.log(this.props);
    }

    render() { 
        return (
        <div style={Styles.playersList}>
            {
                this.props.players.map((player, i)=> (
                    <div key={i} onClick={()=>this.props.selectPlayer(player)}>
                        <Link to={`${this.props.match.url}/${player.name}`}>
                            <div style={Styles.player}> {player.name} </div>
                        </Link>
                    </div>
                ))
            }
            <input type="text" onChange={(event)=>this.setState({newName: event.target.value})} value={ this.state.newName } />
            <button style={Styles.button} onClick={this.clickHandler}> is better than MJ</button>
            <Route path="/players/:playerId" component={Player} />
        </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        players: state.players
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        selectPlayer: selectPlayer
    }, dispatch);
}
  
export default connect(mapStateToProps, mapDispatchToProps)(PlayersList);
  