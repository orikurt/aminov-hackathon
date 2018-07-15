import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PlayerCard from '../components/PlayerCard';
import RealWorldStats from '../components/RealWorldStats';
import QuickTrade from '../components/QuickTrade';
import GameTimeStats from '../components/GameTimeStats';
import { setSelectedStock } from '../actions/stockCommands';
import { setSelectedPlayer } from '../actions/playerCommands';

class Player extends React.Component {

    componentDidMount(){
        this.props.setSelectedPlayer(this.props.match.params.playerId);
        this.props.setSelectedStock(this.props.match.params.playerId);
    }

    render(){
        if (this.props.player == null){
            return (<h3>No player selected</h3>)
        }
        return (
            <div style={containerStyle}>
                <div style={ rowStyle }>
                    <div style={{ minWidth: '350px' }}>
                        <PlayerCard {...this.props} />
                    </div>
                    <div >
                        <GameTimeStats style={ tableStyle } />
                    </div>
                </div>
                <div style={ rowStyle }>
                    <div style={{ minWidth: '350px', fontSize: '100%'}}>
                        {this.props.stock ? <QuickTrade stock={this.props.stock} /> : null}
                    </div>
                </div>
                <div style={ rowStyle }>
                    <RealWorldStats stats={this.props.player.stats} />
                </div>
            </div>
        )
    }
}

const tableStyle = {
    width: '1000px',
    fontSize: '16px'
}

const containerStyle = {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'start',
    alignItems: 'center'
}

const rowStyle = {
    width: '100%',
    display: 'flex'
}

const mapStateToProps = (state) => {
    return {
        player: state.selectedPlayer.data,
        stock: state.selectedStock.data        
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    setSelectedPlayer,
    setSelectedStock
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Player);