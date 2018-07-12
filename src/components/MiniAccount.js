import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MaterialIcon from 'material-icons-react';
import { getUser } from '../actions/userCommands';
import { colors } from '../utils/uiScheme';

class miniAccount extends Component {

    render(){
        return (<div style={miniStyle}>
            <div>
                <MaterialIcon icon="account_balance" color={colors.textLowlight} size={18}/>
                <div>{this.props.user.data.cash}$</div>
            </div>
            <div style={vl}></div>
            <div>
                <MaterialIcon icon="golf_course" color={colors.textLowlight} size={18}/>
                <div>42</div>
            </div>        
        </div>
    )}
}

const vl = {
    width: '1px',
    height: '32px',
    color: 'rgba(149, 165, 166, 0.3)',
    borderRight: '1px solid'
}

const miniStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    color: colors.green,
    width: '100px'
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


