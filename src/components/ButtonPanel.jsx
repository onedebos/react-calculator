import React from 'react';
import './ButtonPanel.css';

const ButtonPanel = () => (
  <div className="button-panel-component">
    <div className="gr-1">
      <button className="gr-btns" type="button">
        AC
      </button>
      <button className="gr-btns" type="button">
        +/-
      </button>
      <button className="gr-btns" type="button">
        %
      </button>
      <button className="gr-btns" type="button">
        /
      </button>
    </div>
    <div className="gr-2">
      <button className="gr-btns" type="button">
        7
      </button>
      <button className="gr-btns" type="button">
        8
      </button>
      <button className="gr-btns" type="button">
        9
      </button>
      <button className="gr-btns" type="button">
        X
      </button>
    </div>
    <div className="gr-3">
      <button className="gr-btns" type="button">
        4
      </button>
      <button className="gr-btns" type="button">
        5
      </button>
      <button className="gr-btns" type="button">
        6
      </button>
      <button className="gr-btns" type="button">
        -
      </button>
    </div>
    <div className="gr-4">
      <button className="gr-btns" type="button">
        1
      </button>
      <button className="gr-btns" type="button">
        2
      </button>
      <button className="gr-btns" type="button">
        3
      </button>
      <button className="gr-btns" type="button">
        +
      </button>
    </div>
    <div className="gr-5">
      <button className="gr-btns zero" type="button">
        0
      </button>

      <button className="gr-btns" type="button">
        .
      </button>
      <button className="gr-btns" type="button">
        =
      </button>
    </div>
  </div>
);

export default ButtonPanel;
