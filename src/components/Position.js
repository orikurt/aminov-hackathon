import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { colors } from '../utils/uiScheme';
import { DashboardNumberItem, DashboardSharesItem, DashboardEquityItem, DashboardCostItem } from '../elements/DashboradItems';
import SignUpButton from './SignUpButton';

class Position extends Component {
    state = {
        portfolio: {}   
    }

    componentWillReceiveProps(props){
        let portfolioObject = {};
        props.user.data.portfolio.reduce((holdings, portfolioObject) => {
            portfolioObject[holdings.uid] = holdings;
            return portfolioObject;
        }, portfolioObject)
        this.setState({
            portfolio: portfolioObject
        })
    }
    render(){
        if (! this.props.user.lastUpdated){
            return (
            <div>
                <h4>Position</h4>
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
            </div>);
        }
        else {
            return (
            <div>
                <div style={{ ...rowStyle, justifyContent: 'space-between' }}>
                    <h4>Position</h4>
                    <label >
                        <span style={{ fontSize: '14px', color: colors.textLowlight }}>Role </span>
                        <span style={{ fontSize: '16px', color: colors.third }}>{ positionData[0].role }</span>
                    </label>
                </div>
                <div style={ rowStyle }>
                    <DashboardSharesItem 
                        name="Shares" 
                        value={ positionData[0].shares } 
                        secondary={ positionData[0].shares *  this.props.stock.data.price }
                         />
                    <DashboardEquityItem 
                        name="Equity" 
                        value={ positionData[0].equity /100 }
                        secondary={ positionData[0].holdingRank } />
                    <DashboardCostItem 
                        name="AVG Cost" 
                        value={ (positionData[0].avgBuyPrice ) }
                        secondary={ (  this.props.stock.data.price / positionData[0].avgBuyPrice) -1} />
                </div>
                <div style={ rowStyle }>
                    <div style={ columnStyle }>
                        <h5>Productivity</h5>
                        <DashboardNumberItem name="Per Game" value={ positionData[0].points.perGame }  />
                        <DashboardNumberItem name="Season" value={ positionData[0].points.season } />
                        <DashboardNumberItem name="Lifetime" value={ (positionData[0].points.lifetime ) }  />
                    </div>
                    <div style={ columnStyle }>
                        <h5>Dividends</h5>
                        <DashboardNumberItem name="Per Day" value={ positionData[0].dividends.perDay }  />
                        <DashboardNumberItem name="Season" value={ positionData[0].dividends.season } /> 
                        <DashboardNumberItem name="Lifetime" value={ (positionData[0].dividends.lifetime ) }  />
                    </div>                    
                </div>
                                
            </div>
            );
        }
    }
}

const rowStyle = { 
    display: 'flex', 
    justifyContent: 'space-evenly',
    alignItems: 'baseline',
}

const columnStyle = { 
    ...rowStyle,
    flexDirection: 'column',
}

const positionData = [{
    holdingRank: 42, 
    role: 'Starter',
    shares: 420000,
    equity: 1.72,
    points: {season: 721, lifetime: 8667, perGame: 113.9}, 
    dividends: {season: 124000, lifetime: 966667, perDay: 18600}, 
    avgBuyPrice: 30,
}]

const mapStateToProps = (state) => ({
    user: state.user,
    stock: state.selectedStock
})

export default connect(mapStateToProps)(Position);