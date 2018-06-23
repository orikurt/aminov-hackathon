import React, { Component } from 'react';
import Styles from './Styles';
import PlayersList from './PlayersList/PlayersList'
import Player from './Player/Player';

class App extends Component {
  rand255 = ()=> (parseInt(Math.random() * 255));

  randomColor = ()=> `rgb(${this.rand255()}, ${this.rand255()}, ${this.rand255()})`

  appTitle = Object.assign({ color: this.randomColor()}, Styles.appTitle);

  state = {};
  
  clickHandler = () => this.setState({playerNames: [this.state.newName, "Kobe", "Steph", "Kawhi"]})

  render() {    
    return (
      <div style={Styles.app}>
        <header style={Styles.appHeader}>
          <h1 style={this.appTitle}>Stats Center</h1>
        </header>
        <div>
          <PlayersList />
        </div>
        <Player />
      </div>
    );
  }
}

export default App;
