import Big from 'big.js/big';

const operate = (numberOne, numberTwo, operation) => {
  let result;
  switch (operation) {
    case '-':
      result = Big(numberOne).minus(numberTwo);
      break;
    case '+':
      result = Big(numberOne).plus(numberTwo);
      break;
    case 'x':
      result = Big(numberOne).times(numberTwo);
      break;
    case '/':
      result = Big(numberOne).div(numberTwo);
      break;
    default:
      result = Big(numberOne).div(numberTwo);
      break;
  }
  return result.toString();
};

export default operate;
