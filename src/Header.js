import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import LayoutToggler from './components/LayoutToggle';
import NavBar from './components/NavBar';
import MiniAccount from './components/MiniAccount';
import { colors } from './utils/uiScheme';
import LogoutButton from './components/LogoutButton';

class Header extends Component{
    render(){
        return (
            <div className="headerContainer">
                <LayoutToggler /> 
                <Link to="/" style={{textDecoration: 'none', color: colors.text}}><h5>GameTime</h5></Link>
                <MiniAccount />
                <div style={navStyle}>
                    <Route 
                        path="/"
                        component={NavBar}
                    />
                </div>
                <LogoutButton />
            </div>
        )
    }
}

const navStyle = {
    marginBottom: '15px'
}

export default Header;