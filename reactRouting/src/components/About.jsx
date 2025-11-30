import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/Dashboard");
  }
  return (
    <div>
      About Page
      <button onClick={handleClick}>Go to Dashboard page</button>
    </div>
  );
}

export default About;
