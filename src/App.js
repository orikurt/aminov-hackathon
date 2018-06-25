import React, { Component } from 'react';
import Styles from './Styles';
import PlayersList from './PlayersList/PlayersList'
import { Route, Link } from 'react-router-dom';

class App extends Component {
  rand255 = ()=> (parseInt(Math.random() * 255, 10));

  randomColor = ()=> `rgb(${this.rand255()}, ${this.rand255()}, ${this.rand255()})`

  appTitle = Object.assign({ color: this.randomColor()}, Styles.appTitle);

  state = {};
  
  clickHandler = () => this.setState({playerNames: [this.state.newName, "Kobe", "Steph", "Kawhi"]})

  render() {    
    return (
      <div style={Styles.app}>
        <header style={Styles.appHeader}>
          <div style={this.appTitle}>Stats Center</div>
          <div>
            <nav>
              <Link to="/players">Players</Link>
            </nav>
          </div>
        </header>
        <Route path="/players" component={PlayersList} />
      </div>
    );
  }
}

export default App;
