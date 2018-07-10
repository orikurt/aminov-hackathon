import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import LayoutToggler from './components/LayoutToggle';
import NavBar from './components/NavBar';
import MiniAccount from './components/MiniAccount';
import { colors } from './utils/uiScheme';

class Header extends Component{
    render(){
        return (
            <div className="headerContainer">
                <LayoutToggler /> 
                <Link to="/" style={{textDecoration: 'none', color: colors.text}}><h3>Game Time</h3></Link>
                <MiniAccount />
                <div className="NavBar">
                    <Route 
                        path="/"
                        component={NavBar}
                    />
                </div>
            </div>
        )
    }
}

export default Header;