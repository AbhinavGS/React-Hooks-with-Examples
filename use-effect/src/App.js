import React, { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
    console.log("useEffect ran!");

    return () => {
      // clean up is used to remove event listener, clear timers, etc
      console.log("clean up");
    };
  }, [count]); // <- add the count variable here
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation} (using useEffect)</p>
    </>
  );
};

export default App;
