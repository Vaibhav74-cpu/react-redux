import React, { useEffect, useState } from "react";

function WindowSize() {
  const [windowWidth, setWidth] = useState(window.innerWidth);

  useEffect(() => {

    const handleSize =()=> setWidth(window.innerWidth);
    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, []);

  return (
    <div>
      <h1>{windowWidth}px</h1>
    </div>
  );
}

export default WindowSize;
