import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Styles from './Styles';

class Header extends Component{   
    render(){
        return (
            <div style={Styles.appTitle}>
                <h1>Game Time</h1>
            </div>
        )
    }
}

export default Header;