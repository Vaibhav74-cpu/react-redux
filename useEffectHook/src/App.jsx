import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
import Timer from "./components/Timer";
import WindowSize from "./components/WindowSize";

function App() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  //first -side effect function
  //second- cleanup function
  //third- comma separated dependency list

  //variation 1 : runs on every render
  // useEffect(()=>{
  //   alert("run on each render")
  // });

  //variation 2 : runs only first render
  // useEffect(() => {
  //   alert("run on first render");
  // }, []);

  //variation 3: run every time when count is updated or action is trigger
  // useEffect(() => {
  //   alert("runs on every time when count is updated");
  // }, [count]);

  //variation 4 :render using multiple dependencies
  // useEffect(() => {
  //   alert("runs or trigger when when total or count is updated");
  // }, [count, total]);

  //variation 5 : using clran up and side effect
  useEffect(() => {
    alert("count is updated");
    return () => {
      alert("count is unmounted/deleted");
    };
  }, [count]);

  function handleCount() {
    setCount(count + 1);
  }

  function handleTotal() {
    setTotal(total + 1);
  }
  return (
    <>
    <Timer></Timer>
    <WindowSize></WindowSize>
      <div>
        <button onClick={handleCount}>Click me</button>
        <h3>count: {count}</h3>
      </div>

      <div>
        <button onClick={handleTotal}>Click me</button>
        <h3>Total: {total}</h3>
      </div>
    </>
  );
}

export default App;
