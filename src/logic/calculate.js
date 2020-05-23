import operate from './operate';

const calculate = (calcualtor, buttonName) => {
  const res = { ...calcualtor };
  if (buttonName === '+' || buttonName === '-' || buttonName === '*' || buttonName === '/' || buttonName === '%') {
    res.total = operate(calcualtor.total, calcualtor.next, calcualtor.operation);
    res.next = '0';
  } else if (buttonName === 'AC') {
    res.total = '0';
    res.next = '0';
    res.operation = null;
  } else {
    res.total = operate(calcualtor.total, -1, '*');
    res.next = operate(calcualtor.next, -1, '*');
  }
  return res;
};

export default calculate;
