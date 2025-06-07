import React, { useState } from "react";

export default () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  console.log("renderizado");
  return (
    <>
      <p>Count : {count}</p>
      <button onClick={handleClick}>Incremente</button>
    </>
  );
};

// aula 28
