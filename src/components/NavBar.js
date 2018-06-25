import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import MaterialIcon from 'material-icons-react';
import routes from '../routes';

class NavBar extends Component{

    componentDidMount(){
    }

    render(){
        const LiStyle = this.props.layout === "HLO" ? Object.assign({}, navLiStyle, LiStyleHLO) : navLiStyle
        return(
            <div>
                <ul style={navUlStyle}>
                    { routes.map((route, index)=>{
                        if (route.path === "/"){
                            return null;
                        }
                        return (
                        <li style={LiStyle} key={index}>
                            <NavLink to={route.path} style={navAStyle}>
                                <MaterialIcon icon={route.icon} color="#fff" size={32}/>
                                <div style={navLabelStyle}>{ route.title }</div>
                            </NavLink>
                        </li>
                    )})}
                </ul>
            </div>
        )
    }
}

const navUlStyle = {
    margin: 0,
    padding: 0
}

const navLiStyle = {
    width: '80%',
    height: '72px',
    color: '#fff',
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