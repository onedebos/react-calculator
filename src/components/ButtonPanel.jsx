import Button from './Button';
import React from 'react';
import PropTypes from 'prop-types';

import './styles/ButtonPanel.css';

class ButtonPanel extends React.Component {
  const handleClick = (buttonName) => {
    this.props.clickHandler(buttonName);
  };
  render() {
    return (
      <div className="button-panel-component">
        <div className="row">
          <Button buttonName="AC" color="#dfdfdf" />
          <Button buttonName="+/-" color="#dfdfdf" />
          <Button buttonName="%" color="#dfdfdf" />
          <Button buttonName="/" />
        </div>
        <div className="row">
          <Button buttonName="7" color="#dfdfdf" clickHandler={this.handleClick} />
          <Button buttonName="8" color="#dfdfdf" clickHandler={this.handleClick} />
          <Button buttonName="9" color="#dfdfdf" clickHandler={this.handleClick} />
          <Button buttonName="X" />
        </div>
        <div className="row">
          <Button buttonName="4" color="#dfdfdf" />
          <Button buttonName="5" color="#dfdfdf" />
          <Button buttonName="6" color="#dfdfdf" />
          <Button buttonName="-" />
        </div>
        <div className="row">
          <Button buttonName="1" color="#dfdfdf" />
          <Button buttonName="2" color="#dfdfdf" />
          <Button buttonName="3" color="#dfdfdf" />
          <Button buttonName="+" />
        </div>
        <div className="row gr-5">
          <Button className="zero" buttonName="0" color="#dfdfdf" wide />
          <Button buttonName="." color="#dfdfdf" />
          <Button buttonName="=" />
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
