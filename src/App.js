import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from "react-toastify";
import Header from './Header';
import Content from './Content';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component{
  
  render(){
    return (
    <div className={'App ' + this.props.layout}>
      <div className="appHeader">
        <Header />
      </div>
      <div className="appContent">
        <ToastContainer />
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