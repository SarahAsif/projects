import React, { useEffect, useState } from "react";
import UseContext from "./UseContext";

const UseEffect = () => {
  const [width, setWidth] = useState(window.screen.width);
  const addEvent = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", addEvent);
    return () => {
      window.removeEventListener("resize", addEvent);
    };
  });

  return (
    <div>
      <p>The actual size of the window is:</p>
      <h1>{width}</h1>
    </div>
  );
};

export default UseEffect;
