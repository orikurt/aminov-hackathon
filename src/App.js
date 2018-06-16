import React, { Component } from 'react';
import Styles from './Styles';
import Player from './Player/Player'

class App extends Component {
  rand255 = ()=> (parseInt(Math.random() * 255));

  randomColor = ()=> `rgb(${this.rand255()}, ${this.rand255()}, ${this.rand255()})`

  appTitle = {
    color: this.randomColor()
  }

  playerNames = ["MJ", "Kobe", "Steph"]

  render() {
    Object.assign(this.appTitle, Styles.appTitle);
    return (
      <div style={Styles.app}>
        <header style={Styles.appHeader}>
          <h1 style={this.appTitle}>Stats Center</h1>
        </header>
        {
          this.playerNames.map((name, i)=> ( 
            <Player key={i} name={name} /> 
          ))
        }
        <button></button>
      </div>
    );
  }
}

export default App;
