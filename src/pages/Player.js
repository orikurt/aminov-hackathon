import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PlayerCard from '../components/PlayerCard';
import RealWorldStats from '../components/RealWorldStats';
import QuickTrade from '../components/QuickTrade';
import GameTimeStats from '../components/GameTimeStats';
import { setSelectedStock } from '../actions/stockCommands';
import { setSelectedPlayer } from '../actions/playerCommands';
import Search from '../components/Search';
import { colors } from '../utils/uiScheme';

class Player extends React.Component {

    componentDidMount(){
        this.props.setSelectedPlayer(this.props.match.params.playerId);
        this.props.setSelectedStock(this.props.match.params.playerId);
    }

    componentWillReceiveProps(props){
        if(props.match.params.playerId !== this.props.match.params.playerId){
            this.props.setSelectedPlayer(props.match.params.playerId);
            this.props.setSelectedStock(props.match.params.playerId);
        }
    }

    render(){
        if (this.props.player == null){
            return (<h3>No player selected</h3>)
        }
        return (
            <div style={containerStyle}>
                <div style={ rowStyle }>
                    <div style={{ ...columnStyle, width: '320px', borderRight: `1px solid ${colors.darkGray}` }}>
                        <PlayerCard {...this.props} />
                        {this.props.stock ? <QuickTrade stock={this.props.stock} /> : null}
                    </div>
                    <div style={{ ...columnStyle, flexGrow: '1' }}>
                        <Search style={ searchStyle } />
                        <GameTimeStats />
                    </div>
                </div>
                <div style={ rowStyle }>
                    <RealWorldStats stats={this.props.player.stats} />
                </div>
            </div>
        )
    }
}

const searchStyle = { 
    width: '300px', 
    float: 'right',
    marginBottom: '10px'
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
    display: 'flex',
    justifyContent: 'space-evenly'
}

const columnStyle = {
    displey: 'flex',
    flexDirection: 'column',
    marginRight: '20px'
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