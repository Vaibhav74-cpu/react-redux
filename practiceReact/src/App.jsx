import "./App.css";
import UserCard from "./components/UserCard";
import h1 from "./assets/house3.png";
import h2 from "./assets/house4.png";
import h3 from "./assets/house5.png";
import Card from "./components/Card";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  var [current, updateFun] = useState(0);

  function handleClick() {
    updateFun(current + 1);
  }
  return (
    <>
      <Button text="click" handleClick={handleClick}>
        <h1>{current}</h1>
      </Button>

      <div className="container">
        <UserCard
          name="hose1"
          desc="at nandanvan"
          img={h1}
          style={{ "border-radius": "10px" }}
        />
        {/* <UserCard name="house2" desc="gorewada" img={h2} />
      <UserCard name="house3" desc="manakapur" img={h3} /> */}
      </div>

      <Card>
        <h2>student</h2>
        <p>i am vaibhav</p>
        <p>from nagpur</p>
        <p></p>
      </Card>
      <Card children={"live with 3 members"}>{/* live with family */}</Card>
    </>
  );
}

export default App;
