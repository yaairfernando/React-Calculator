import React from 'react'
import PropTypes from 'prop-types';

const Display = ({result}) => {
  return (
    <div>{result}</div>
  )
};

Display.defaultProps = {
  result: 0
}

Display.propTypes = { 
  result: PropTypes.number.isRequired
}

export default Display;