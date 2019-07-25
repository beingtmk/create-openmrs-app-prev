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

        {/* About OpenMRS */}
        <div>
          <h1>
            About OpenMRS
          </h1>

          <p>
            OpenMRS is a collaborative open-source project to develop software to support the delivery of health care in developing countries.
          </p>

          <p>
            OpenMRS is founded on the principles of openness and sharing of ideas, software and strategies for deployment and use.
          </p>

        
        </div>
        <hr/>
        {/* About OpenMRS React Components Repository*/}
        <div>
          <h1>
            About OpenMRS React Components Repository
          </h1>

          <p>
            OpenMRS is a collaborative open-source project to develop software to support the delivery of health care in developing countries. 
          </p>

          <p>
            OpenMRS is founded on the principles of openness and sharing of ideas, software and strategies for deployment and use.
          </p>

        </div>
        <hr/>

        <p className="App-intro">
           <b> Server Address: { serverAddress } </b><br/><br/>
           <b> Server Context Path: { serverContextPath } </b>
        </p>
        <hr/>

        <div>
          <h1>
            Minimal Configuration Repository
          </h1>

          <p>
            You can open the current directory in your favourite editor and start coding!
          </p>

        </div>

      </div>
    );
  }
}

export default App;
