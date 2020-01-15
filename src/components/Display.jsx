import React, { Component } from "react";
import PropTypes from "prop-types";

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

Display.propTypes = {
  result: PropTypes.string
};

export default Display;
