import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MaterialIcon from 'material-icons-react';
import { setLayout } from '../actions';

const togglerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly"
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

class layoutToggler extends Component {
    render(){
        return(
            <div className="toggler" style={togglerStyle}>
                <div onClick={()=>{this.props.setLayout("HLO")}}>
                    <MaterialIcon 
                        icon="table_chart" 
                        color={ this.props.layout === "HLO" ? "#fff" : "#95a5a6" }
                    />
                </div>
                <div onClick={()=>{this.props.setLayout("VLO")}}>
                    <MaterialIcon 
                        icon="burst_mode" 
                        color={ this.props.layout === "VLO" ? "#fff" : "#95a5a6" } 
                        size={30}
                    />
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(layoutToggler);