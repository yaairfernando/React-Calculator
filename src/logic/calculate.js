import operate from './operate';

const calculate = (calcualtor, buttonName, callback) => {
  const that = calcualtor;
  const res = { ...calcualtor.state };
  const { total, next, operation } = calcualtor.state;

  switch (buttonName) {
    case '+':
    case '-':
    case 'x':
      if (next === '.') {
        res.total = operate(total, '0', operation);
      } else {
        res.total = operate(total, next, operation);
      }
      res.next = '0';
      callback.call(that, res.total, buttonName);
      break;
    case '%':
      if (total) {
        res.total = operate(total, 100, '%');
        callback.call(that, res.total);
      }
      break;
    case '/':
      if (next > '0') {
        res.total = operate(total, next, operation);
        res.next = '0';
      }
      if (next <= '0' || next === '.') {
        res.total = '0';
        res.next = '0';
        res.operation = null;
      }
      callback.call(that, res.total);
      break;
    case 'AC':
      res.total = '0';
      res.next = '0';
      res.operation = null;
      callback.call(that, res.total);
      break;
    default:
      if (total) {
        res.total = operate(total, -1, 'x');
        callback.call(that, res.total);
      }
      if (next) {
        res.next = operate(next, -1, 'x');
        callback.call(that, res.total);
      }
      break;
  }
  return res;
};

export default calculate;
