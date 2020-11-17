import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Button, { ButtonType, ButtonSize } from './components/Button/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
      <Button>Call me!</Button>
      <Button disabled>Disabled</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Small}> Hello </Button>
      <Button btnType={ButtonType.Link} href="https://www.baidu.com"> href </Button>
    </div>
  );
}

export default App;
