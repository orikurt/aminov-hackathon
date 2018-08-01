import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { pageContainerStyle, pageColumnStyle, pageRowStyle, searchStyle } from '../Styles';
import PlayerCard from '../components/PlayerCard';
import QuickTrade from '../components/QuickTrade';
import OffersBar from '../components/OffersBar';
import { mockOffers, mockTrades, chartData, mockTrend } from '../utils/mockData';
import { setSelectedPlayer } from "../actions/playerCommands";
import { setSelectedStock } from "../actions/stockCommands";
import PlayerNav from '../components/PlayerNav';
import { colors } from '../utils/uiScheme';
import PriceTrend from '../components/PriceTrend';
import OrderBook from '../components/OrderBook';
import Search from '../components/Search';
import TradesList from '../components/TradesList';
import HoldingCard from '../components/HoldingCard';
import Collapsable from '../components/Collapsable';

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
                <Search style={ searchStyle } />
                <div style={ pageColumnStyle }>
                    <PlayerNav />
                    <HoldingCard player={ this.props.player.data } stock={ this.props.stock.data } />
                    <QuickTrade user={ this.props.user } stock={ this.props.stock } />
                    <OffersBar offers={ this.props.offers } />
                </div>
                <div style={{ minHeight: '300px', borderRight: `1px solid ${ colors.secondary}`}}></div>
                <div style={{ ...pageColumnStyle, minWidth: '800px' }}>
                    <Collapsable minHeight="90px"  toggleTop="64px" expanded={true} >
                        <div style={{ display: 'flex', padding: '10px 0' }}>
                            <Tab value="Day" style={{ backgroundColor: colors.darkGray }} />
                            <Tab value="Week" />
                            <Tab value="Month" />
                            <Tab value="Season" />
                            <Tab value="Lifetime" />
                        </div>
                        <h4>Price Trend</h4>
                        <div style={ pageRowStyle }>
                            <PriceTrend data={ chartData() } trend={ mockTrend } />
                        </div>
                    </Collapsable>
                    <Collapsable style={{ marginTop: '15px' }} toggleTop="5px" expanded={true} >
                        <div style={ pageRowStyle }>
                            <OrderBook offers={ mockOffers.filter(offer => !offer.type_ask) } style={ orderBookStyle } />
                            <OrderBook offers={ mockOffers.filter(offer => offer.type_ask) } style={ orderBookStyle } />
                            <TradesList trades={ mockTrades } style={{ ...orderBookStyle, width: '270px' }} />
                        </div>
                    </Collapsable>
                </div>
            </div>
        )
    }
}

const orderBookStyle = {
    width: '250px',
    minHeight: '300px',
    fontSize: '12px'
}

const Tab = (props) => (
    <label style={{ 
        fontSize: '10px',
        cursor: 'pointer',
        width: '60px', 
        height: '30px', 
        border: `1px solid ${colors.darkGray}` ,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...props.style
    }}>
        { props.value }
    </label>
)

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