import React, {useState} from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [buttonClicked, setButtonClicked] = useState(false);

  console.log("APP RUNNING");

  function clickHandler() {
    setButtonClicked((prevState) => !prevState);
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={clickHandler}>Show Paragraph</Button>
      <DemoOutput show={buttonClicked} />
    </div>
  );
}

export default App;
