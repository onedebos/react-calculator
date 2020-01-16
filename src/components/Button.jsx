import React from 'react';
import PropTypes from 'prop-types';
import './styles/Button.css';

const Button = (props) => {
  const { buttonName } = props;
  const { color } = props;
  const { wide } = props;

  return wide ? (
    <div className="button-component" style={{ width: '50%' }}>
      <button type="button" style={{ backgroundColor: color }}>
        {buttonName}
      </button>
    </div>
  ) : (
    <div className="button-component" style={{ width: '25%' }}>
      <button style={{ backgroundColor: color }} type="button">
        {buttonName}
      </button>
    </div>
  );
};
Button.propTypes = {
  buttonName: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  buttonName: '',
  color: '#fc8f2f',
  wide: false,
};

export default Button;
