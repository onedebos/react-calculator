import React from 'react';
import PropTypes from 'prop-types';
import './styles/Display.css';

const Display = (props) => {
  const { result } = props;
  return <div className="display-component">{result}</div>;
};

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};
export default Display;
