import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import LayoutToggler from './components/LayoutToggle';
class Header extends Component{
    render(){
        return (
            <div>
                <div>
                    <LayoutToggler />
                </div>
                <h3>Game Time</h3>
            </div>
        )
    }
}

export default Header;