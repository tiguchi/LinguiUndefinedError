import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Trans } from '@lingui/react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            {
                // Following line causes the error React.cloneElement(...): The argument must be a React element, but you passed undefined.
                // It is only triggered when a translated block contains tags
            }
            <Trans id="someId">To get started, edit <code>src/App.js</code> and save to reload.</Trans>

            {
                // Without id attribute there is no error but the following translation block appears blank (uncomment to see)
                /*<Trans>To get started, edit <code>src/App.js</code> and save to reload.</Trans>*/
            }
        </p>
      </div>
    );
  }
}

export default App;
