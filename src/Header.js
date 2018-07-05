import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import LayoutToggler from './components/LayoutToggle';
import MiniAccount from './components/MiniAccount';

class Header extends Component{
    render(){
        return (
            <div className="headerContainer">
                <LayoutToggler /> 
                <Link to="/" style={{textDecoration: 'none', color: '#fff'}}><h3>Game Time</h3></Link>
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