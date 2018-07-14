import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MaterialIcon from 'material-icons-react';
import { getUser } from '../actions/userCommands';
import { colors } from '../utils/uiScheme';

class miniAccount extends Component {

    componentDidMount(){
        this.props.getUser();
    }
    
    render(){
        return (
        <div>
            <div>
                <img 
                    src={ this.props.user.data.imageUrl }
                    style={imageStyle} />
                <label>{ this.props.user.data.username }</label>
            </div>
            <div style={balancesStyle}>
                <div>
                    <MaterialIcon icon="account_balance" color={colors.textLowlight} size={18}/>
                    <div>{ this.props.user.data.cash }$</div>
                </div>
                <div style={vl}></div>
                <div>
                    <MaterialIcon icon="golf_course" color={colors.textLowlight} size={18}/>
                    <div>{ this.props.user.data.points }</div>
                </div>        
            </div>
        </div>
    )}
}

const vl = {
    width: '2px',
    height: '32px',
    color: 'rgba(149, 165, 166, 0.3)',
    borderRight: '1px solid'
}

const balancesStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    color: colors.green,
    width: '100px'
}

const imageStyle = {
    width: '60px',
    height: '60px',
    border: `1px solid ${colors.third}`,
    borderRadius: '5px'
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


