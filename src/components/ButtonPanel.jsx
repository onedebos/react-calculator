import React, { Component } from "react";

class ButtonPanel extends Component {
  render() {
    return (
      <div>
        <div className="gr-1">
          <button>AC</button>
          <button>+/-</button>
          <button>%</button>
          <button>/</button>
        </div>
        <div className="gr-2">
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>X</button>
        </div>
        <div className="gr-3">
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
        </div>
        <div className="gr-2">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>+</button>
        </div>
        <div className="gr-2">
          <button>0</button>
          <button>.</button>
          <button>=</button>
          <button> </button>
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
