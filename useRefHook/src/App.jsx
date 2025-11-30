import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let value = useRef(0);

  let btnRef = useRef();

  //case :1
  function handleIncrement() {
    value.current = value.current + 1;
    console.log(`value  = `, value);
    setCount(count + 1);
  }

  // useEffect(() => {
  //   console.log(`rerender again`);
  // });

  //used case 2
  function colorChange() {
    btnRef.current.style.backgroundColor = "red";
  }

  return (
    <>
      <button ref={btnRef} onClick={handleIncrement}>
        Increment
      </button>
      <br />
      <br />
      <button onClick={colorChange}>Change color</button>
      <br /><br />
      <p>Count:{count}</p>
    </>
  );
}

export default App;

/*
useRef -->used to store value that does not re-render the component
avoid re-rendering
access dom elements
variables created by useRef are persist the value across rerenders
useState -->re-render the state/component
*/
