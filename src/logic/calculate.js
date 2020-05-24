import operate from './operate';

const calculate = (calcualtor, buttonName) => {
  const res = { ...calcualtor };
  const { total, next, operation } = calcualtor;
  if (buttonName === '+' || buttonName === '-' || buttonName === '*' || buttonName === '%') {
    res.total = operate(total, next, operation);
    res.next = '0';
  } else if (buttonName === '/') {
    if (next > '0') {
      res.total = operate(total, next, operation);
      res.next = '0';
    }
  } else if (buttonName === 'AC' || (buttonName === '/' && next <= '0')) {
    res.total = '0';
    res.next = '0';
    res.operation = null;
  } else {
    res.total = operate(total, -1, '*');
    res.next = operate(next, -1, '*');
  }
  return res;
};

export default calculate;
