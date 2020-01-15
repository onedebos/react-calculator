import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './App.css';
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
    this.handleClick = this.handleClick.bind(this);
  }

  clearDisplay() {
    this.setState({
      total: null,
      next: null,
      operation: null,
      buttonName: null,
      display: null,
    });
  }

  clearAfterCalculation() {
    this.setState({
      next: null,
      operation: null,
    });
  }

  handleClick(e) {
    const buttonContent = e.target.textContent;
    if (buttonContent === 'AC') {
      this.clearDisplay();
    } else if (buttonContent === '=') {
      this.setState((priorState) => calculate(priorState, priorState.buttonName));
      this.setState((priorState) => ({ display: priorState.total }));
      this.clearAfterCalculation();
    } else if (isNaN(Number(buttonContent))) {
      this.setState({
        operation: buttonContent,
        buttonName: buttonContent,
      });
      if (buttonContent === '+/-') {
        this.setState((priorState) => calculate(priorState, priorState.buttonName));
        this.setState((priorState) => ({ display: priorState.total }));
      } else {
        this.setState((priorState) => ({ display: priorState.display + buttonContent }));
      }
    } else if (this.state.operation === null) {
      if (this.state.total === null) {
        this.setState({ total: buttonContent });
      } else {
        this.setState((priorState) => ({ total: priorState.total + buttonContent }));
      }
      this.setState((priorState) => ({ display: priorState.total }));
    } else if (this.state.next === null) {
      this.setState({ next: buttonContent });
      this.setState((priorState) => ({ display: priorState.display + buttonContent }));
    } else {
      this.setState((priorState) => ({ next: priorState.next + buttonContent }));
      this.setState((priorState) => ({ display: priorState.display + buttonContent }));
    }
  }

  render() {
    return (
      <div id="app-container">
        <Display result={this.state.display ? this.state.display : '0'} className="display" />
        <ButtonPanel className="button-panel" onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
