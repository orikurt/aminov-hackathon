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
import { searchStyle } from '../Styles';
import PlayerNav from '../components/PlayerNav';
import { mockOffers } from '../utils/mockData';
import '../Layout.css';

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
            <div className="pageContainerStyle">
                <Search style={ searchStyle } />
                <div className="playerCard">
                    <PlayerNav />
                    <PlayerCard  player={ this.props.player.data } stock={ this.props.stock.data } />
                </div>
                <div className="quickTrade">
                    <QuickTrade user={ this.props.user } stock={ this.props.stock } />
                    <OffersBar offers={ this.props.offers } />
                </div>
                <h4 className="positionTitle" style={{ textAlign: 'center' }}>Portfolio Position</h4>
                { this.props.user.lastUpdated && this.props.stock.lastUpdated
                ? <div className="position">
                    <Position 
                    stock={ this.props.stock.data }
                    user={ this.props.user.data } />
                </div>
                : (<div className="signupSection">
                    <SignUpButton />
                    <p>
                        to receive <span style={{ color: colors.third }}>FREE</span> startup bankroll and build your portfolio
                    </p>
                    <p>
                        If you already have an account, 
                        <Link to="/login"> Login</Link>              
                    </p>
                </div>) }
                <div className="upcoming">
                    <UpcomingGames player={ this.props.player.data } style={{ paddingBottom: '15px', borderBottom: `1px solid ${ colors.secondary }` }} />
                </div>
                <div className="recent">
                    <RecentGames player={ this.props.player.data } />
                </div>
                <div className="gametimeStats">
                    <GameTimeStats/>
                </div>
                <div className="similar">
                    <SimilarPlayers players={this.props.playersList} />
                </div>
                <div className="realWorld">
                    <RealWorldStats stats={ this.props.playerStats } />
                </div>
            </div>
        )
    }
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
