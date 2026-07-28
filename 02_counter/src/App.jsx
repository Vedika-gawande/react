import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  let [counter, setcounter] = useState(1);
  const addValue = () => {
    if(counter<=20){
    setcounter(counter+1);
    }
  };
  const removeValue = () => {
    if(counter>0){
    setcounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}> Add</button>
      <br ></br>
      <button onClick={removeValue}> Remove</button>
    </>
  );
}

export default App;
