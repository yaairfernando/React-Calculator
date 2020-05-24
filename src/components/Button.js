import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: ${props => props.color};
  flex: ${props => (props.wide ? '0 0 50%' : '0 0 25%')};
  color: black;
  font-size: 30px;
  border: 1px solid #D1D1D1;

  &:active,
  &:focus,
  &:visited {
    outline: none;
  }

  &:hover {
    cursor: pointer;
    background: #ccc;
  }
`;

const Button = ({
  name, color, wide, onClick,
}) => (
  <StyledButton
    type="button"
    color={color}
    wide={wide}
    onClick={() => onClick(name)}
  >
    {name}
  </StyledButton>
);

Button.defaultProps = {
  color: '#E0E0E0',
  wide: false,
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default Button;
