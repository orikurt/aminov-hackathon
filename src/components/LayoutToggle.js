import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MaterialIcon from 'material-icons-react';
import { setLayout } from '../actions';
import Tooltip from './Tooltip';

class layoutToggler extends Component {
    
    isHLO = () => ( this.props.layout === "HLO")
    
    isVLO = () => ( this.props.layout === "VLO")
    
    toggler = () => {
        this.isVLO() ? this.props.setLayout("HLO") : this.props.setLayout("VLO")
    }
    
    render(){
        
        return(
            <Tooltip
                value="toggle layout"
                id="layoutTooltip"
                placement="left">
                <div 
                    className="toggler" 
                    onClick={this.toggler} >
                    <MaterialIcon 
                        icon={this.isVLO() ? "web" : "burst_mode"}
                        size={30}
                        color="rgba(149, 165, 166, 1)"/>
                </div>
            </Tooltip>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        layout: state.layout
    }
}

const mapDispatchToProps = (dispath) => {
    return bindActionCreators({
        setLayout: setLayout
    }, dispath);
}

export default connect(mapStateToProps, mapDispatchToProps)(layoutToggler);