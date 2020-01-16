import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => {
  const { buttonName } = props;
  return (
    <div className="button-component" style={{ width: '50%' }}>
      <button type="button">{buttonName}</button>
    </div>
  );
};
Button.propTypes = {
  buttonName: PropTypes.string,
};

Button.defaultProps = {
  buttonName: '',
};

export default Button;
