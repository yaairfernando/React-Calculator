import React from 'react';
import styled from 'styled-components';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate'; // eslint-disable-line no-unused-vars

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

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <AppContainer id="calculator">
        <Display />
        <ButtonPanel />
      </AppContainer>
    );
  }
}

export default App;
