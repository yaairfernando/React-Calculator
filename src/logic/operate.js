import Big from 'big.js/big';

const operate = (numberOne, numberTwo, operation) => {
  const x = new Big(numberOne);
  let result;

  switch (operation) {
    case '-':
      result = x.minus(numberTwo);
      break;
    case '+':
      result = x.plus(numberTwo);
      break;
    case '*':
      result = x.times(numberTwo);
      break;
    case '/':
      result = x.div(numberTwo);
      break;
    default:
      result = x.mod(numberTwo);
      break;
  }
  return result.toString();
};

export default operate;
