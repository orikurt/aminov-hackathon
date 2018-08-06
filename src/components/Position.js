import React, { Component } from 'react';
import { colors } from '../utils/uiScheme';
import { Glyphicon } from 'react-bootstrap';
import { DashboardNumberItem, DashboardSharesItem, DashboardEquityItem, DashboardCostItem } from '../elements/DashboradItems';
import Tooltip from './Tooltip';

class Position extends Component {
    state = {
        portfolio: {}   
    }

    componentWillReceiveProps(props){
        let portfolioObject = {};
        props.user.portfolio.reduce((holdings, portfolioObject) => {
            portfolioObject[holdings.uid] = holdings;
            return portfolioObject;
        }, portfolioObject)
        this.setState({
            portfolio: portfolioObject
        })
    }
    render(){
        return (
        <div style={{ minWidth: '420px' }}>
            <div style={{ ...rowStyle, justifyContent: 'space-around' }}>
                <Tooltip value={ positionData[0].shares ? "Player is on your team" : "Player is not on your team" }>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Glyphicon 
                            glyph={positionData[0].shares ? "star" : "star-empty"}
                            style={{ color: colors.third, fontSize: '18px' }} />
                        <label >
                            <span style={{ fontSize: '10px', color: colors.darkGray }}>Role </span>
                            <span style={{ fontSize: '12px', color: colors.third }}>{ positionData[0].role }</span>
                        </label>
                    </div>
                </Tooltip>
            </div>
            <div style={ rowStyle }>
                <DashboardSharesItem 
                    name="Shares" 
                    value={ positionData[0].shares } 
                    secondary={ positionData[0].shares *  this.props.stock.price }
                        />
                <DashboardEquityItem 
                    name="Equity" 
                    value={ positionData[0].equity /100 }
                    secondary={ positionData[0].holdingRank } />
                <DashboardCostItem 
                    name="AVG Cost" 
                    value={ (positionData[0].avgBuyPrice ) }
                    secondary={ (  this.props.stock.price / positionData[0].avgBuyPrice) -1} />
            </div>
            <h5>Points</h5>
            <div style={ rowStyle }>
                <DashboardNumberItem name="Per Game" value={ positionData[0].points.perGame }  />
                <DashboardNumberItem name="Season" value={ positionData[0].points.season } />
                <DashboardNumberItem name="Lifetime" value={ (positionData[0].points.lifetime ) }  />
                {/* <div style={ columnStyle }>
                    <h5>Dividends</h5>
                    <DashboardNumberItem name="Per Day" value={ positionData[0].dividends.perDay }  />
                    <DashboardNumberItem name="Season" value={ positionData[0].dividends.season } /> 
                    <DashboardNumberItem name="Lifetime" value={ (positionData[0].dividends.lifetime ) }  />
                </div>                     */}
            </div>
                            
        </div>
        );
    }
}

const rowStyle = { 
    display: 'flex', 
    justifyContent: 'space-evenly',
    alignItems: 'center',
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

export default Position;