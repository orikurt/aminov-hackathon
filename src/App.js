import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Player from './Player/Player'

class App extends Component {


  playerNames = ["Kawhi", "Kobe", "Shaq", "MJ"];

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Stats Center</h1>
        </header>
        {
          this.playerNames.map((name, i) => (
            <Player key={i} name={name} />
            ))
        }

      </div>
    );
  }
}

export default App;
