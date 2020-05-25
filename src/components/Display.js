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
    width: 100%;
    text-align: right;
  }
`;

const checkResultLength = result => {
  if (result && result.length > 25 && result.match(/[A-Za-z]/)) {
    const index = result.indexOf(result.match(/[A-Za-z]/));
    const formatedResult = result.slice(0, 20) + result.slice(index);
    return formatedResult;
  }
  return result;
};

const Display = ({ result }) => {
  const formatedResult = checkResultLength(result);
  return (
    <DisplayContainer id="display-container">
      <span>{formatedResult}</span>
    </DisplayContainer>
  );
};

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
