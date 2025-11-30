import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/About");
  }
  return (
    <div>
      Home page
      <button onClick={handleClick}>Go to About page</button>
    </div>
  );
}

export default Home;
