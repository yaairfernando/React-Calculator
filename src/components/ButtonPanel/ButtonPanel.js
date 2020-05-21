import React from 'react'
import Button from '../Button/Button';

const buttonsArr = [
  ["AC", "+/-", "%", "/"],
  ["7", "8", "9", "x"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["0", ".", "="],
]


const ButtonPanel = () => {

  const renderButtons = buttonsArr.map((group, index) => {
    return (
      <div key={index}>
        {group.map((button, index) => {
           return <Button key={index} name={button} />
        })}
      </div>
    )
  })

  return (
    <div>
      {renderButtons}
    </div>
  )
};

export default ButtonPanel;