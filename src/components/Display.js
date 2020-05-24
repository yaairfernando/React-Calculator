import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DisplayContainer = styled.div`
  width: 100%;
  background: #848693;
  height: 100px;
  display: flex;
  justify-content: flex-end;

  span {
    color: #fff;
    padding: 20px 10px;
    font-weight: bold;
    font-size: 50px;
  }
`;

const Display = ({ result }) => (
  <DisplayContainer id="display-container">
    <span>{result}</span>
  </DisplayContainer>
);

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
