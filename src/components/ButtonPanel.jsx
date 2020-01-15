import React from 'react';
import './ButtonPanel.css';
import PropTypes from 'prop-types';
import Button from './Button';

class ButtonPanel extends React.Component {
  render() {
    return (
      <div className="button-panel-component">
        <div className="gr-1">
          <Button
            onClick={(buttonName) => this.props.onClick(buttonName)}
            buttonName="AC"
            color="#dfdfdf"
            className="gr-btns"
          />
          <Button buttonName="+/-" color="#dfdfdf" className="gr-btns" />
          <Button buttonName="%" color="#dfdfdf" className="gr-btns" />
          <Button buttonName="/" className="gr-btns" />
        </div>
        <div className="buttonGroup gr-2">
          <Button
            onClick={(buttonName) => this.props.onClick(buttonName)}
            buttonName="7"
            color="#dfdfdf"
          />
          <Button buttonName="8" color="#dfdfdf" />
          <Button buttonName="9" color="#dfdfdf" />
          <Button buttonName="x" />
        </div>
        <div className="buttonGroup gr-3">
          <Button buttonName="4" color="#dfdfdf" />
          <Button buttonName="5" color="#dfdfdf" />
          <Button buttonName="6" color="#dfdfdf" />
          <Button buttonName="-" />
        </div>
        <div className="buttonGroup gr-4">
          <Button buttonName="1" color="#dfdfdf" />
          <Button buttonName="2" color="#dfdfdf" />
          <Button buttonName="3" color="#dfdfdf" />
          <Button buttonName="+" />
        </div>
        <div className="buttonGroup gr-5">
          <Button buttonName="0" className="zero" color="#dfdfdf" isWide />
          <Button buttonName="." color="#dfdfdf" />
          <Button buttonName="=" />
        </div>
      </div>
    );
  }
}

ButtonPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
