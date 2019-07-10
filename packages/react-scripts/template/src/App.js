import React, { Component } from 'react';
import logo from './openmrs.logo';
import './App.css';

class App extends Component {

  getEnvValues() {
    if (!process.env.REACT_APP_SERVER_ADDRESS || !process.env.REACT_APP_SERVER_CONTEXT_PATH) {
      throw new Error('Please define `REACT_APP_SERVER_ADDRESS` and `REACT_APP_SERVER_CONTEXT_PATH` in your .env file');
    }

    const serverAddress = process.env.REACT_APP_SERVER_ADDRESS
    const serverContextPath = process.env.REACT_APP_SERVER_CONTEXT_PATH;

    return { serverAddress, serverContextPath };
  }

  render() {

    const { serverAddress, serverContextPath } = this.getEnvValues();

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to OpenMRS React Components</h2>
        </div>
        <p className="App-intro">
           <b> Server Address: { serverAddress } </b><br/><br/>
           <b> Server Context Path: { serverContextPath } </b>
        </p>
      </div>
    );
  }
}

export default App;
