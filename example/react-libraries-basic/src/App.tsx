import React from "react";
// import logo from './logo.svg';
// import './App.css';
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
      <Button
        onClick={() => {
          alert(111);
        }}
      >
        Call me!
      </Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
        Big
      </Button>
      <Button disabled>Disabled</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>
        {" "}
        Small{" "}
      </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>
        {" "}
        Danger{" "}
      </Button>
      <Button btnType={ButtonType.Link} href="https://www.baidu.com">
        {" "}
        href{" "}
      </Button>
      <Button btnType={ButtonType.Link} disabled href="https://www.baidu.com">
        {" "}
        baidu{" "}
      </Button>
      <Menu mode="vertical" defaultIndex={0} onSelect={index => alert(index)}>
        <MenuItem>menu1</MenuItem>
        <MenuItem disabled>menu2</MenuItem>
        <MenuItem>menu3</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>dropdown1</MenuItem>
          <MenuItem disabled>dropdown2</MenuItem>
          <MenuItem>dropdown3</MenuItem>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default App;
