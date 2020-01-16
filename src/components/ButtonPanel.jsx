import React from 'react';
import Button from './Button';
import './styles/ButtonPanel.css';

const ButtonPanel = () => (
  <div className="button-panel-component">
    <div className="row">
      <Button buttonName="AC" color="red" />
      <Button buttonName="+/-" />
      <Button buttonName="%" />
      <Button buttonName="/" />
    </div>
    <div className="row">
      <Button buttonName="7" />
      <Button buttonName="8" />
      <Button buttonName="9" />
      <Button buttonName="X" />
    </div>
    <div className="row">
      <Button buttonName="4" />
      <Button buttonName="5" />
      <Button buttonName="6" />
      <Button buttonName="-" />
    </div>
    <div className="row">
      <Button buttonName="1" />
      <Button buttonName="2" />
      <Button buttonName="3" />
      <Button buttonName="+" />
    </div>
    <div className="row gr-5">
      <Button className="zero" buttonName="0" />
      <Button buttonName="." />
      <Button buttonName="=" />
    </div>
  </div>
);

export default ButtonPanel;
