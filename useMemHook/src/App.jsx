import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setinput] = useState(0);

  function expensiveTask(num) {
    for (let index = 0; index < 1000000000; index++) {}
    return num * 2;
  }
  const ans = useMemo(() => expensiveTask(input), [input]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br />
      <p>{count}</p>

      <input
        type="Number"
        value={input}
        placeholder="enter number"
        onChange={(e) => setinput(e.target.value)}
      />

      <p>Answer: {ans}</p>
    </div>
  );
}

export default App;

/*
useMemo -->used for memoriztion 
useMemo stores a calculated value and reuses it until its dependencies change
prevent expensivee task
used for heavy calculation
hold current value
*/
