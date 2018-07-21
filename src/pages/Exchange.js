import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { pageContainerStyle, pageColumnStyle } from '../Styles';
import PlayerCard from '../components/PlayerCard';
import QuickTrade from '../components/QuickTrade';
import OffersBar from '../components/OffersBar';
import { mockOffers } from '../utils/mockData';
import { setSelectedPlayer } from "../actions/playerCommands";
import { setSelectedStock } from "../actions/stockCommands";
import PlayerNav from '../components/PlayerNav';
import { colors } from '../utils/uiScheme';
import PriceTrend from '../components/PriceTrend';

class Exchange extends Component {

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
        return (
            <div style={ pageContainerStyle }>
                <div style={ pageColumnStyle }>
                    <PlayerNav />
                    <PlayerCard player={ this.props.player.data } stock={ this.props.stock.data } />
                    <QuickTrade user={ this.props.user } stock={ this.props.stock } />
                    <OffersBar offers={ this.props.offers } />
                </div>
                <div style={{ minHeight: '300px', borderRight: `1px solid ${ colors.secondary}`}}></div>
                <div style={{ ...pageColumnStyle, minWidth: '800px' }}>
                    <PriceTrend />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    playersList: state.players.list,
    player: { ...state.selectedPlayer, data: state.players.data[state.selectedPlayer.id] || {} },
    stock: { ...state.selectedStock, data: state.stocks.data[state.selectedStock.id] || {} },
    playerStats: state.players.stats[state.selectedPlayer.id],
    user: state.user,
    offers: mockOffers
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setSelectedPlayer,
        setSelectedStock,        
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Exchange);