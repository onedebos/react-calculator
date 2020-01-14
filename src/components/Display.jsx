import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Display.css";

class Display extends Component {
  static propTypes = {
    result: PropTypes.string
  };
  render() {
    return (
      <div className="display-component">
        <div>{this.props.result}</div>
      </div>
    );
  }
}

export default Display;
