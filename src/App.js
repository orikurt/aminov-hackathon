import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import { connect } from 'react-redux';
import './App.css';

class App extends Component{
  
  render(){
    return (
    <div className={'App ' + this.props.layout}>
      <div className="appHeader">
      <Header />
      </div>
      <div className="appContent">
        <Content />
      </div>
    </div>
  )}
}

const mapStateToProps = (state) => {
  return {
    layout: state.layout
  }
}

export default connect(mapStateToProps)(App);