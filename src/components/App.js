import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './styles/App.css';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      buttonName: null,
      display: null,
    };
  }

  handleClick = (buttonName) => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <div id="app-container">
        <Display result={this.state.next || this.state.total || '0'} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
