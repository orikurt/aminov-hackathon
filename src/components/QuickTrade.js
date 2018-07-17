import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FormControl, Button, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Tooltip from './Tooltip';
import { colors } from '../utils/uiScheme';
import { percentFormat, numberFormat } from '../utils/format';
import { postOffer } from '../actions/offerCommands';

class quickTrade extends Component {
    state = {
        shares: 0
    }

    componentWillReceiveProps( props ){
        this.setQuantity(0.25, props);
    }

    setShares = (e) => {
        this.setState({
            shares: parseInt(e.target.value || 0, 10)
        });
    }

    setQuantity = (quantity, props = this.props) => {
        this.setState({
            shares: Math.round( (( props.user.data.cash || 1000000 ) * quantity) / props.stock.data.price ) || 100
        })
    }

    sendOffer = (type_ask) => {
        this.props.postOffer({
            type_ask,
            price: this.props.stock.data.price,
            uid: this.props.stock.data.uid,
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
                        <Glyphicon glyph="question-sign" style={{ color: colors.darkGray, fontSize: '24px'}}/>
                    </div>
                </Tooltip>
            </div>
            <div style={lineStyle} >
                <span style={{ color: colors.textLowlight }}>Best price</span>
                <label style={{fontSize: '18px', color: colors.green}} >$ {numberFormat(this.props.stock.data.price)}</label>
            </div>
            <div style={lineStyle}>
                <span style={{ color: colors.textLowlight }}>Equity worth</span>
                <label style={{ fontSize: '16px' }} >{ percentFormat(this.state.shares / this.props.stock.data.shares) }%</label>
            </div>
            <div style={lineStyle}>
                <span style={{ color: colors.textLowlight }}>Estimated value</span>
                <label style={{ fontSize: '16px', color: colors.third }}>$ {numberFormat(this.props.stock.data.price * this.state.shares)}</label>
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
                <Glyphicon glyph="transfer" style={{ color: colors.text, fontSize: '32px'}} />
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
    minWidth: '300px',
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
    margin: '10px 0',
    backgroundColor: colors.black
}

const tooltipValue = <label><strong>buy or sell</strong> as quickly as possible at best avaiable price</label>;

const mapStateToProps = (state) => {
    return {
        user: state.user,
        stock: state.selectedStock
    };
}

const mapDispathToProps = (dispatch) => {
    return bindActionCreators({ postOffer }, dispatch)
}

export default connect(mapStateToProps, mapDispathToProps)(quickTrade);