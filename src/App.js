import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Player from './Player/Player'

class App extends Component {

  state = {
    playerNames: ["Kawhi", "Kobe", "Shaq", "MJ"],
    newName: "Lebron"
  }

  

  ClickHandler = () => {
    this.setState(
      {
        playerNames: ["Kawhi", "Kobe", "Shaq", this.state.newName]
      }
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Stats Center</h1>
        </header>
        {
          this.state.playerNames.map((name, i) => (
            <Player key={i} name={name} />
            ))
        }

        <button onClick = {this.ClickHandler} >Change Players</button>
        <input type="text" value={this.state.newName} onChange={(event)=>{this.setState({newName:event.target.value})}} />
      </div>
    );
  }
}

export default App;
