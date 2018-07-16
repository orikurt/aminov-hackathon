import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Glyphicon } from 'react-bootstrap';
import routes from '../routes';
import { colors } from '../utils/uiScheme';

class NavBar extends Component{

    componentDidMount(){
    }

    render(){
        const LiStyle = this.props.layout === "HLO" ? Object.assign({}, navLiStyle, LiStyleHLO) : navLiStyle
        return(
            <div>
                <ul style={navUlStyle}>
                    { routes.filter(route=>!route.navNo).map((route, index)=>(
                        <li style={LiStyle} key={index}>
                            <NavLink to={ route.path } style={ navAStyle }>
                                <Glyphicon glyph={ route.icon } style={ iconStyle }/>
                                <div style={ navLabelStyle }>{ route.title }</div>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

const iconStyle = {
    color: colors.text,
    fontSize: '22px',
    margin: '5px'
}

const navUlStyle = {
    margin: 0,
    padding: 0
}

const navLiStyle = {
    width: '80%',
    minHeight: '72px',
    color: colors.text,
    listStyle: 'none',
    cursor: 'pointer',
    textAlign: 'center',
    borderBottom: '1px solid rgba(149, 165, 166, 0.3)',
    margin: '0 auto',
}

const navAStyle = {
    textDecoration: 'none',
    display: 'block',
    color: 'inherit',
    paddingTop: '10px'
}

const navLabelStyle = {
    fontSize: '12px',
    paddingBottom: '10px'
}

const LiStyleHLO = {
    float: 'left',
    padding: '0 8px',
    width: '70px',
    borderBottom: 'none',
    borderRight: '1px solid rgba(149, 165, 166, 0.2)',
    borderLeft: '1px solid rgba(149, 165, 166, 0.2)'
}

const mapStateToProps = (state)=>{
    return {
        layout: state.layout
    }
}
export default connect(mapStateToProps)(NavBar);