import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div id="calculator">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
