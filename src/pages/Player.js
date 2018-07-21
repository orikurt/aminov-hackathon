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
import SimilarPlayers from '../components/SimilarPlayers';
import OffersBar from '../components/OffersBar';

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
                <div style={ columnStyle }>
                    <PlayerCard player={ this.props.player.data } stock={ this.props.stock.data } />
                    <QuickTrade user={ this.props.user } stock={ this.props.stock } />
                    <OffersBar offers={ this.props.offers } />
                </div>
                <div style={{ minHeight: '300px', borderRight: `1px solid ${colors.secondary}`}}></div>                                
                <div style={ columnStyle }>
                    <div style={rowStyle}>
                        <div >
                            { this.props.user.lastUpdated && this.props.stock.lastUpdated
                            ? <Position 
                                stock={ this.props.stock.data }
                                user={ this.props.user.data } />
                            : (<div>
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
                            <Search style={ searchStyle } />
                            <div style={{ ...columnStyle, height: '100%' }}>
                                <UpcomingGames player={ this.props.player.data } style={{ paddingBottom: '5px', borderBottom: `1px solid ${ colors.secondary }` }} />
                                <RecentGames player={ this.props.player.data } />
                            </div>
                        </div>
                    </div>
                    <div>
                        <SimilarPlayers />
                    </div>
                </div>
                <div style={rowStyle}>
                    <GameTimeStats />
                </div>                        
                <div style={rowStyle}>
                    <RealWorldStats stats={ this.props.playerStats } />
                </div>
            </div>
        )
    }
}

const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    justifyContent: 'space-around',
}

const rowStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: '15px'
}

const columnStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    padding: '0 10px'
}

const searchStyle = { 
    width: '300px', 
    margin: '0 auto',
    marginBottom: '10px'
}

const mapStateToProps = (state) => {
    return {
        player: { ...state.selectedPlayer, data: state.players.data[state.selectedPlayer.id] || {} },
        stock: { ...state.selectedStock, data: state.stocks.data[state.selectedStock.id] || {} },
        playerStats: state.players.stats[state.selectedPlayer.id],
        user: state.user,
        offers: mockOffers
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    setSelectedPlayer,
    setSelectedStock,
}, dispatch);

const mockOffers = [
    {price: 42, quantity: 13, type_ask: true}, 
    {price: 33, quantity: 313, type_ask: false}, 
    {price: 12, quantity: 23, type_ask: false}
]

export default connect(mapStateToProps, mapDispatchToProps)(Player);
