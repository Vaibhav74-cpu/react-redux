import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
import LogOut from "./components/LogOut";
import Login from "./components/Login";

function App() {
  const [name, setName] = useState("");
  let [logIn, logout] = useState(false);

  // if (!logIn) {
  //   return (
  //     <Login></Login>
  //   )
  // }

//  return (
//  <div>
//    {logIn && <LogOut></LogOut>}
//  </div>
//  )



  // return (
  //   <div>
  //     {logIn ? <LogOut></LogOut> : <Login></Login>}
  //   </div>
  // )

  // if (logIn) {
  //   return <LogOut></LogOut>;
  // }else{
  //   return <Login></Login>
  // }

  // state lifting- parent(app,jsx) cretem manage and change state and also help in synchronization
  return (
    <>
      <Card place="child" name={name} setName={setName} />
      <Card place="parenst" name={name} setName={setName} />
      {/* <p>i am inside {name} </p> */}
    </>
  );
}

export default App;

//conditional rendering
/*
if else
logical operator
early return
ternary operator
*/
