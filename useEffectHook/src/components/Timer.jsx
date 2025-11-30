import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Timer() {
  const [sec, updateSec] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateSec((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h2>Seconds: {sec}</h2>
    </div>
  );
}

export default Timer;
