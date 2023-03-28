import {useState} from "react";
import Output from "./Output";

function Greeting() {
  const [changedText, setChangedText] = useState(false);

  function changeTextHandler() {
    setChangedText(true);
  }
  return (
    <div>
      <h2>Hello World</h2>
      {!changedText && <Output>It´s good to see you</Output>}
      {changedText && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}>ChangeText</button>
    </div>
  );
}

export default Greeting;
