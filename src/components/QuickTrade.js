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
        shares: Math.round(this.props.stock.shares/1000) || 0
    }

    setShares = (e) => {
        this.setState({
            shares: parseInt(e.target.value || 0, 10)
        });
    }

    setQuantity = (quantity) => {
        this.setState({
            shares: Math.round( (this.props.user.data.cash * quantity) / this.props.stock.price )
        })
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
                        <MaterialIcon icon="help_outline" color={colors.darkGray} size={24}/>
                    </div>
                </Tooltip>
            </div>
            <div style={lineStyle} >
                <span style={{ color: colors.textLowlight }}>Best price</span>
                <label style={{fontSize: '18px', color: colors.green}} >$ {numberFormat.format(this.props.stock.price)}</label>
            </div>
            <div style={lineStyle}>
                <span style={{ color: colors.textLowlight }}>Equity worth</span>
                <label style={{ fontSize: '16px' }} >{ percentFormat(this.state.shares / this.props.stock.shares) }%</label>
            </div>
            <div style={lineStyle}>
                <span style={{ color: colors.textLowlight }}>Estimated value</span>
                <label style={{ fontSize: '16px', color: colors.third }}>$ {numberFormat.format(this.props.stock.price * this.state.shares)}</label>
            </div>
            <div style={lineStyle} >
                <span style={{ color: colors.textLowlight }}>Shares Quantity</span>
                <FormControl 
                    style={inputStyle} 
                    type="number" 
                    value={this.state.shares} 
                    onChange={this.setShares}/>                
            </div>
            { this.props.user.signedIn 
            ? (<div style={lineStyle} >
                <label style={quantitiesStyle} onClick={()=>this.setQuantity(0.01)}>1%</label>
                <label style={quantitiesStyle} onClick={()=>this.setQuantity(0.05)}>5%</label>
                <label style={quantitiesStyle} onClick={()=>this.setQuantity(0.1)}>10%</label>
                <label style={quantitiesStyle} onClick={()=>this.setQuantity(0.25)}>25%</label>
                <label style={quantitiesStyle} onClick={()=>this.setQuantity(0.50)}>50%</label>
                <label style={quantitiesStyle} onClick={()=>this.setQuantity(0.75)}>75%</label>
                <label style={quantitiesStyle} onClick={()=>this.setQuantity(1)}>100%</label>
            </div>) 
            : (<div style={lineStyle} ></div> )
            }
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
    minHeight: '30px'
}

const inputStyle = {
    width: '120px',
    fontSize: '18px'
}

const buttonStyle = {
    width: '120px',
    height: '50px',
    fontSize: '18px'
}

const buyStyle = {
    background: colors.green,
    borderColor: colors.green,
}

const sellStyle = {
    background: colors.third,
    borderColor: colors.third,
}

const quantitiesStyle = {
    cursor: 'pointer',
    border: `1px  dashed ${colors.lightGray}`,
    padding: '5px',
    marginTop: '5px',
    backgroundColor: colors.black
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