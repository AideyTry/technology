import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Hello from "./components/Hello";
import useMousePosition from "./components/hooks/useMousePosition";

function App() {
  const positions = useMousePosition();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          X:{positions.x} Y:{positions.y}
        </p>
        <Hello message={"123"}></Hello>
      </header>
    </div>
  );
}

export default App;
