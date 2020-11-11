import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Hello from "./components/Hello";
// import useMousePosition from "./components/hooks/useMousePosition";
import withLoader from "./components/HOC/withLoader";

interface IShowResult {
  name: string;
  age: string;
}
const LoadingShow: React.FC<{ data: IShowResult }> = ({ data }) => {
  console.log('data==========', data)
  return (
    <>
      <h2>Show Content</h2>
      <strong>name: </strong>
      <span>{data.name}</span>
    </>
  );
};

function App() {
  // const positions = useMousePosition();
  const NewWithLoader = withLoader(LoadingShow, "/user/info");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {/* <p>
          X:{positions.x} Y:{positions.y}
        </p> */}
        <Hello message={"123"}></Hello>
      </header>
      <NewWithLoader />
    </div>
  );
}

export default App;
