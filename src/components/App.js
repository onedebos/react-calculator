import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './App.css';

const App = () => (
  <div id="app-container">
    <Display result="0" className="display" />
    <ButtonPanel className="button-panel" />
  </div>
);

export default App;
