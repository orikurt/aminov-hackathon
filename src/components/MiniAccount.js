import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Glyphicon } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { getUser } from '../actions/userCommands';
import { colors } from '../utils/uiScheme';
import SignUpButton  from './SignUpButton';

class miniAccount extends Component {

    componentDidMount(){
        this.props.getUser();
    }
    
    render(){
        if (!this.props.user.signedIn){
            return (
                <SignUpButton />
            )
        }
        return (
        <div>
            <div style={ userBoxStyle }>
                <Image
                    src={ this.props.user.data.imageUrl }
                    style={imageStyle}
                    circle />
                <label>{ this.props.user.data.username }</label>
            </div>
            <div style={balancesStyle}>
                <div>
                    <Glyphicon glyph="piggy-bank" style={{color: colors.textLowlight, fontSize: '20px'}} />
                    <div>{ this.props.user.data.cash }$</div>
                </div>
                <div style={horizonatlLine}></div>
                <div>
                <Glyphicon glyph="equalizer" style={{color: colors.textLowlight, fontSize: '20px'}} />
                    <div>{ this.props.user.data.points }</div>
                </div>        
            </div>
        </div>
    )}
}

const userBoxStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}

const horizonatlLine = {
    height: '2px',
    width: '90%',
    color: 'rgba(149, 165, 166, 0.3)',
    borderBottom: '1px solid',
    marginBottom: '10px',
    marginTop: '5px'
}

const balancesStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    color: colors.green,
    width: '80px',
    marginBottom: '10px'
}

const imageStyle = {
    width: '60px',
    height: '60px',
    border: `1px solid ${colors.third}`,
    marginBottom: '10px'
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getUser
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(miniAccount);


