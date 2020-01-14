import React from "react";
import PropTypes from "prop-types";

class Button extends Component {
  static propTypes = {
    buttonName: PropTypes.string
  };
  render() {
    return (
      <div>
        <div>{this.props.buttonName}</div>
      </div>
    );
  }
}

export default Button;
