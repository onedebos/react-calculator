import React, { Component } from 'react';
import './ButtonPanel.css';

class ButtonPanel extends Component {
  render() {
    return (
      <div className="button-panel-component">
        <div className="gr-1">
          <button className="gr-btns">AC</button>
          <button className="gr-btns">+/-</button>
          <button className="gr-btns">%</button>
          <button className="gr-btns">/</button>
        </div>
        <div className="gr-2">
          <button className="gr-btns">7</button>
          <button className="gr-btns">8</button>
          <button className="gr-btns">9</button>
          <button className="gr-btns">X</button>
        </div>
        <div className="gr-3">
          <button className="gr-btns">4</button>
          <button className="gr-btns">5</button>
          <button className="gr-btns">6</button>
          <button className="gr-btns">-</button>
        </div>
        <div className="gr-4">
          <button className="gr-btns">1</button>
          <button className="gr-btns">2</button>
          <button className="gr-btns">3</button>
          <button className="gr-btns">+</button>
        </div>
        <div className="gr-5">
          <button className="gr-btns zero">0</button>

          <button className="gr-btns">.</button>
          <button className="gr-btns">=</button>
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
