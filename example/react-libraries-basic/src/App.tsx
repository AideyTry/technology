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
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Big</Button>
      <Button disabled>Disabled</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Small}> Small </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Large}> Danger </Button>
      <Button btnType={ButtonType.Link} href="https://www.baidu.com"> href </Button>
      <Button btnType={ButtonType.Link} disabled href="https://www.baidu.com"> baidu </Button>
    </div>
  );
}

export default App;
