import React, { Component } from 'react';
import Styles from './Styles';
import Player from './Player/Player'

class App extends Component {
  rand255 = ()=> (parseInt(Math.random() * 255));

  randomColor = ()=> `rgb(${this.rand255()}, ${this.rand255()}, ${this.rand255()})`

  appTitle = Object.assign({ color: this.randomColor()}, Styles.appTitle);

  state = {
    playerNames: ["MJ", "Kobe", "Steph", "Kawhi"],
    teams: ["Bulls", "Lakers", "Jazz", "Warriors"],
    newName: "LebRon"
  }

  clickHandler = () => this.setState({playerNames: [this.state.newName, "Kobe", "Steph", "Kawhi"]})

  render() {    
    return (
      <div style={Styles.app}>
        <header style={Styles.appHeader}>
          <h1 style={this.appTitle}>Stats Center</h1>
        </header>
        {
          this.state.playerNames.map((name, i)=> ( 
            <Player key={i} name={name} /> 
          ))
        }
        <button onClick={this.clickHandler}>{this.state.newName} is better than MJ</button>
        <input type="text" onChange={(event)=>this.setState({newName: event.target.value})} value={ this.state.newName } />
      </div>
    );
  }
}

export default App;