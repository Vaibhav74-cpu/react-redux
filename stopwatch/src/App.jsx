import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useRef } from "react";

function App() {
  const [time, updateTime] = useState(0);
  let timerRef = useRef(null);
  function Starttimer() {
    timerRef.current = setInterval(() => {
      updateTime((time) => time + 1);
    }, 1000);
  }
  function Stoptimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }
  function handleReset() {
    Stoptimer();
    updateTime(0);
  }

  return (
    <div>
      <h1>StopWatch : {time} seconds</h1>
      <br />
      <button onClick={Starttimer}>Start</button>
      <br />
      <br />
      <button onClick={Stoptimer}>Stop</button>
      <br />
      <br />
      <button onClick={handleReset}>Reset</button>
      <br />
      <br />
    </div>
  );
}

export default App;
