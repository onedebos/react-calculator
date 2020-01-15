import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="app-container">
        <Display result="0" className="display" />
        <ButtonPanel className="button-panel" />
      </div>
    );
  }
}

export default App;
