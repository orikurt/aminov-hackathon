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
import { pageContainerStyle, pageColumnStyle } from '../Styles';
import PlayerNav from '../components/PlayerNav';
import { mockOffers } from '../utils/mockData';

class Player extends React.Component {

    componentDidMount(){
        this.props.setSelectedPlayer(this.props.match.params.uid);
        this.props.setSelectedStock(this.props.match.params.uid);
    }

    componentWillReceiveProps(props){
        if(props.match.params.uid !== this.props.match.params.uid){
            this.props.setSelectedPlayer(props.match.params.uid);
            this.props.setSelectedStock(props.match.params.uid);
        }
    }

    render(){
        if (this.props.player.lastUpdated == null){
            return (<h3>No player selected</h3>)
        }
        return (
            <div style={ pageContainerStyle }>
                <div style={ pageColumnStyle }>
                    <PlayerNav />
                    <PlayerCard player={ this.props.player.data } stock={ this.props.stock.data } />
                    <QuickTrade user={ this.props.user } stock={ this.props.stock } />
                    <OffersBar offers={ this.props.offers } />
                </div>
                <div style={{ minHeight: '300px', borderRight: `1px solid ${colors.secondary}`}}></div>
                <div style={{ ...pageColumnStyle, minWidth: '800px' }}>
                    <div style={rowStyle}>
                        <div >
                            <h4 style={{ textAlign: 'center' }}>Portfolio Position</h4>
                            { this.props.user.lastUpdated && this.props.stock.lastUpdated
                            ? <Position 
                                stock={ this.props.stock.data }
                                user={ this.props.user.data } />
                            : (<div>
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
                        <div style={ pageColumnStyle }>
                            <Search style={ searchStyle } />
                            <div style={{ ...pageColumnStyle, height: '100%' }}>
                                <UpcomingGames player={ this.props.player.data } style={{ paddingBottom: '5px', borderBottom: `1px solid ${ colors.secondary }` }} />
                                <RecentGames player={ this.props.player.data } />
                            </div>
                        </div>
                    </div>
                    <div>
                        <GameTimeStats />
                    </div>
                </div>
                <div style={{ ...rowStyle, width: '70%', marginBottom: '0'}}>
                    <SimilarPlayers players={this.props.playersList} />
                </div>                        
                <div style={rowStyle}>
                    <RealWorldStats stats={ this.props.playerStats } />
                </div>
            </div>
        )
    }
}

const rowStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: '15px'
}

const searchStyle = { 
    width: '300px', 
    margin: '0 auto',
    marginBottom: '10px'
}

const mapStateToProps = (state) => {
    return {
        playersList: state.players.list,
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

export default connect(mapStateToProps, mapDispatchToProps)(Player);
