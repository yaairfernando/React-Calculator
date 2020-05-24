import React from 'react';
import styled from 'styled-components';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

const AppContainer = styled.div`
display: flex;
flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;

  @media (max-width: 768px) {
    width: 500px;
  }
`;

const setValue = (number, buttonName, scope, stateAttr) => {
  let value;
  const that = scope;

  if (number === null) {
    value = '';
  } else if (buttonName === '.') {
    if (number === null) {
      value = number;
    } else if (number.includes('.') && number.length > 1) {
      value = 'Not a number';
    } else {
      value = number;
    }
  } else {
    value = number;
  }

  if (stateAttr) {
    if (value !== 'Not a number') {
      value += buttonName;
      that.setState({
        total: value,
        result: value,
      });
    } else {
      that.setState({
        total: null,
        result: value,
      });
    }
  } else if (value !== 'Not a number') {
    value += buttonName;
    that.setState({
      next: value,
      result: value,
    });
  } else {
    that.setState({
      next: null,
      result: value,
    });
  }
};

const calculateValue = (buttonName, scope) => {
  const that = scope;
  if (buttonName === '=') {
    calculate(that, that.state.operation, function updateState(total) {
      this.setState({
        result: total,
        total,
        next: null,
        operation: null,
      });
    });
  } else {
    calculate(that, buttonName, function updateState(total, buttonName) {
      this.setState({
        result: total,
        total,
        next: null,
        operation: buttonName,
      });
    });
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      result: '0',
    };

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(buttonName) {
    switch (buttonName) {
      case '+/-':
      case '%':
        calculate(this, buttonName, function updateState(total) {
          this.setState({ result: total, total });
        });
        break;
      case '+':
      case '-':
      case 'x':
      case '/':
      case '=':
        {
          const { operation } = this.state;
          if (operation) {
            const { next, total } = this.state;
            if (!next || !total) {
              return;
            }
            calculateValue(buttonName, this);
          } else if (buttonName !== '=') {
            this.setState({ operation: buttonName });
          }
        }
        break;
      case 'AC':
        calculate(this, 'AC', function updateState(res) {
          this.setState({
            result: res.total, total: null, next: null, operation: null,
          });
        });
        break;
      default:
        {
          const { operation, next, total } = this.state;
          if (!operation) {
            setValue(total, buttonName, this, 'total');
          } else {
            setValue(next, buttonName, this);
          }
        }
        break;
    }
  }

  render() {
    const { result } = this.state;
    return (
      <AppContainer id="calculator">
        <Display result={result} />
        <ButtonPanel onClick={e => this.onClickHandler(e)} />
      </AppContainer>
    );
  }
}

export default App;
