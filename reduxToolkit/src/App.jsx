import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "./slice/counter/count";

function App() {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(increment());
  }
  function handleDecrement() {
    dispatch(decrement());
  }
  function handleReset() {
    dispatch(reset());
  }

  function handleAmount() {
    dispatch(incrementByAmount(amount));
  }

  return (
    <div className="container">
      <button onClick={handleIncrement}>+</button>
      <p>Count: {count}</p>
      <button onClick={handleDecrement}>-</button>
      <br />
      <br />
      <button onClick={handleReset}>Reset</button>

      <br />
      <br />
      <input
        type="Number"
        placeholder="Enter the amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleAmount}>INC/DEC by amount</button>
    </div>
  );
}

export default App;

/*
steps:
create store using configureStore
wrap App(parent) component under provider
create slice using create slice functin. ie createSlice({sliceName, initialState, reducers:{action-->corresponding logic}})
register the reducers in the store
read the data/value using useSelector hook
dispatch the actions using useDispatch hook
*/

/*
Flow
UI --> take event and --> dispatch the action -->store --> update corresponding reducer-logic in store --> UI re-renders
*/

/*
Store -->  holds all global state 
state --> data
Action --> event  ie. what do you want to do
Reducer --> update state based on action
Dispatch --> dispatch the actions
useSelector --> allow read the data/state from the store
Redux --> state management library
*/
