import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import LayoutToggler from './components/LayoutToggle';

class Header extends Component{
    render(){
        return (
            <div className="headerContainer">
                <LayoutToggler /> 
                <h3>Game Time</h3>
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