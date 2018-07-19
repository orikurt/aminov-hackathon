import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import PlayerCard from '../components/PlayerCard';
import RealWorldStats from '../components/RealWorldStats';
import QuickTrade from '../components/QuickTrade';
import GameTimeStats from '../components/GameTimeStats';
import { setSelectedStock } from '../actions/stockCommands';
import { setSelectedPlayer } from '../actions/playerCommands';
import Search from '../components/Search';
import SignUpButton from '../components/SignUpButton';
import Position from '../components/Position';
import { colors } from '../utils/uiScheme';
import UpcomingGames from '../components/UpcomingGames';
import RecentGames from '../components/RecentGames';

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
        if (this.props.player.lastUpdated == null){
            return (<h3>No player selected</h3>)
        }
        return (
            <div style={containerStyle}>
                <div style={ rowStyle }>
                    <div style={{ ...columnStyle, width: '400px' }}>
                        <PlayerCard player={ this.props.player.data } stock={ this.props.stock.data } />
                        <QuickTrade />
                    </div>
                    <div style={{width: '1px', minHeight: '480px', borderRight: `1px solid ${colors.secondary}`}}></div>
                    <div style={ columnStyle }>
                        <div style={{ ...rowStyle, justifyContent: 'flex-end', marginBottom: '0px' }}>
                            <Search style={ searchStyle } />
                        </div>
                        <div style={ rowStyle }>
                            <div style={{ ...columnStyle, flexGrow: '1' }}>
                            { this.props.user.lastUpdated
                            ? <Position 
                                stock={ this.props.stock.data }
                                user={ this.props.user.data } />
                            : (
                                <div>
                                    <h4>Portfolio Position</h4>
                                    <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', marginBottom: '10px' }}>
                                        <SignUpButton />
                                    </div>
                                    <p>
                                        to receive <span style={{ color: colors.third }}>FREE</span> startup bankroll and build your portfolio
                                    </p>
                                    <p>
                                        If you already have an account, 
                                        <Link to="/login"> Login</Link>              
                                    </p>
                                </div>) }                                
                            </div>
                            <div style={ columnStyle }>
                                <UpcomingGames player={ this.props.player.data } style={{ width: '100%' }} />
                                <RecentGames player={ this.props.player.data } style={{ width: '100%' }} />
                            </div>
                        </div>
                        <div style={ rowStyle }>
                            <GameTimeStats />
                        </div>
                    </div>
                </div>
                <div style={ rowStyle }>
                    { this.props.stock.lastUpdated ? <RealWorldStats stats={this.props.player.data.stats} /> : null }
                </div>
            </div>
        )
    }
}

const searchStyle = { 
    width: '300px', 
    marginBottom: '10px'
}

const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'start',
    alignItems: 'center',
    maxWidth: '1300px'
}

const rowStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    marginBottom: '30px'
}

const columnStyle = {
    displey: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    minWidth: '320px',
}

const mapStateToProps = (state) => {
    return {
        player: state.selectedPlayer,
        stock: state.selectedStock,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    setSelectedPlayer,
    setSelectedStock,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Player);