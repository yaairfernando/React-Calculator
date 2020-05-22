import React from 'react';
import uuid from 'react-uuid';
import styled from 'styled-components';
import Button from './Button';

const ButtonPanelContainer = styled.div`
  display: flex;
  flex-direction: column;

  .button-group {
    height: 100px;
    display: flex;
  }
`;

const buttonsArr = [
  ['AC', '+/-', '%', '/'],
  ['7', '8', '9', 'x'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];


const ButtonPanel = () => {
  const renderButtons = buttonsArr.map(group => (
    <div key={uuid()} className="button-group">
      {group.map(button => {
        if (button === '-' || button === '+' || button === '/' || button === 'x' || button === '=') {
          return <Button key={uuid()} name={button} color="#F4913E" />;
        } if (button === '0') {
          return <Button key={uuid()} name={button} wide />;
        }
        return <Button key={uuid()} name={button} />;
      })}
    </div>
  ));

  return (
    <ButtonPanelContainer id="buttons-container">
      {renderButtons}
    </ButtonPanelContainer>
  );
};

export default ButtonPanel;
