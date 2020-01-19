import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './styles/ButtonPanel.css';

class ButtonPanel extends React.Component {
  handleClick = (buttonName) => {
    this.props.clickHandler(buttonName);
  };
  render() {
    return (
      <div className="button-panel-component">
        <div className="row">
          <Button buttonName="AC" color="#dfdfdf" clickHandler={this.handleClick} />
          <Button buttonName="+/-" color="#dfdfdf" clickHandler={this.handleClick} />
          <Button buttonName="%" color="#dfdfdf" clickHandler={this.handleClick} />
          <Button buttonName="/" clickHandler={this.handleClick} />
        </div>
        <div className="row">
          <Button buttonName="7" color="#dfdfdf" clickHandler={this.handleClick} />
          <Button buttonName="8" color="#dfdfdf" clickHandler={this.handleClick} />
          <Button buttonName="9" color="#dfdfdf" clickHandler={this.handleClick} />
          <Button buttonName="x" clickHandler={this.handleClick} />
        </div>
        <div className="row">
          <Button buttonName="4" color="#dfdfdf" clickHandler={this.handleClick} />
          <Button buttonName="5" color="#dfdfdf" clickHandler={this.handleClick} />
          <Button buttonName="6" color="#dfdfdf" clickHandler={this.handleClick} />
          <Button buttonName="-" clickHandler={this.handleClick} />
        </div>
        <div className="row">
          <Button buttonName="1" color="#dfdfdf" clickHandler={this.handleClick} />
          <Button buttonName="2" color="#dfdfdf" clickHandler={this.handleClick} />
          <Button buttonName="3" color="#dfdfdf" clickHandler={this.handleClick} />
          <Button buttonName="+" clickHandler={this.handleClick} />
        </div>
        <div className="row gr-5">
          <Button
            className="zero"
            buttonName="0"
            color="#dfdfdf"
            wide
            clickHandler={this.handleClick}
          />
          <Button buttonName="." color="#dfdfdf" clickHandler={this.handleClick} />
          <Button buttonName="=" clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
