import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MaterialIcon from 'material-icons-react';
import Tooltip from './Tooltip';
import { colors } from '../utils/uiScheme';
import { percentFormat, numberFormat } from '../utils/format';
import { postOffer } from '../actions/offerCommands';

class quickTrade extends Component {
    state = {
        shares: Math.floor(this.props.stock.shares/1000) || 0
    }

    setShares = (e) => {
        this.setState({
            shares: parseInt(e.target.value || 0, 10)
        });
    }

    sendOffer = (type_ask) => {
        this.props.postOffer({
            type_ask,
            price: this.props.stock.price,
            uid: this.props.stock.uid,
            quantity: this.state.shares,
            userId: this.props.user.data.userId
        });
    }

    render(){ 
        return(
        <div style={containerStyle}>
            <div style={lineStyle} >
                <h4>Quick Trade </h4>
                <Tooltip
                    value={tooltipValue}
                    id="quickTrade"
                    placement="left">
                    <div>
                        <MaterialIcon icon="help_outline" color={colors.purple} size={24}/>
                    </div>
                </Tooltip>
            </div>
            <div style={lineStyle} >
                <span style={{ color: colors.textLowlight }}>Best price</span>
                <label style={{fontSize: '18px'}} >${numberFormat.format(this.props.stock.price)}</label>
            </div>
            <div style={lineStyle}>
                <span style={{ color: colors.textLowlight }}>Estimated value</span>
                <label>${numberFormat.format(this.props.stock.price * this.state.shares)}</label>
            </div>
            <div style={lineStyle}>
                <span style={{ color: colors.textLowlight }}>Equity worth</span>
                <label>{ percentFormat(this.state.shares / this.props.stock.shares) }%</label>
            </div>                        
            <div style={lineStyle} >
                <span style={{ color: colors.textLowlight }}>Shares</span>
                <FormControl 
                    style={{width:'180px'}} 
                    type="number" 
                    value={this.state.shares} 
                    onChange={this.setShares}/>                
            </div>
            <div style={lineStyle}>
            { this.props.user.signedIn ? (
                <Button onClick={() => this.sendOffer(false)} style={{...buttonStyle, ...buyStyle}}>Buy</Button>
            ) : (<Link to="/register"> <Button style={{...buttonStyle, ...buyStyle}}>Buy</Button> </Link>)}
                <MaterialIcon icon="import_export" color={colors.text} size={50}/>
            { this.props.user.signedIn ? (
                <Button onClick={() => this.sendOffer(true)} style={{...buttonStyle, ...sellStyle}}>Sell</Button>
            ) : (<Link to="/register"> <Button style={{...buttonStyle, ...sellStyle}}>Sell</Button> </Link>)}
            </div>
        </div>
        )
    }
}

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    margin: '10px 0',  
}

const lineStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '2px 0',  
}

const buttonStyle = {
    width: '120px',
    height: '50px'
}

const buyStyle = {
    background: colors.green,
    borderColor: colors.green,
}

const sellStyle = {
    background: colors.third,
    borderColor: colors.third,
}

const tooltipValue = "buy or sell at best avaiable price at any giver time";

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
}

const mapDispathToProps = (dispatch) => {
    return bindActionCreators({ postOffer }, dispatch)
}

export default connect(mapStateToProps, mapDispathToProps)(quickTrade);