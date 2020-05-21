import React from 'react';
import uuid from 'react-uuid';
import Button from '../Button/Button';

const buttonsArr = [
  ['AC', '+/-', '%', '/'],
  ['7', '8', '9', 'x'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];


const ButtonPanel = () => {
  const renderButtons = buttonsArr.map(group => (
    <div key={uuid()}>
      {group.map(button => <Button key={uuid()} name={button} />)}
    </div>
  ));

  return (
    <div>
      {renderButtons}
    </div>
  );
};

export default ButtonPanel;
