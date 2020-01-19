import React from 'react';
import PropTypes from 'prop-types';
import './styles/Button.css';

const Button = ({
  buttonName, color, wide, clickHandler,
}) => {
  const handleClick = () => {
    clickHandler(buttonName);
  };
  return (
    <div className="button-component" style={{ width: wide ? '50%' : '25%' }}>
      <button onClick={handleClick} type="button" style={{ backgroundColor: color }}>
        {buttonName}
      </button>
    </div>
  );
};
Button.propTypes = {
  buttonName: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func,
};

Button.defaultProps = {
  buttonName: '',
  color: '#fc8f2f',
  wide: false,
  clickHandler: '',
};

export default Button;
