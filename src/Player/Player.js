import React, { Component } from 'react';
import Styles from './Player.style';
import { connect } from 'react-redux';

class Player extends Component{
    render() {
        return(
            <div style={Styles.player}>
                I am player {this.props.players[this.props.index].name}
            </div>
        )};
}

const mapStateToProps = (state)=>{
    return {
        players: state.players
    }
}

export default connect(mapStateToProps)(Player);