import React, { useState } from "react";

function setInitialVal() {
  return 100;
}

const App = () => {
  const [count, setCount] = useState(setInitialVal());

  function increment() {
    setCount((count) => count + 1);
  }

  function decrement() {
    setCount((count) => count - 1);
  }

  return (
    <>
      <button onClick={increment}>+</button>
      &nbsp;
      {count}
      &nbsp;
      <button onClick={decrement}>-</button>
    </>
  );
};

export default App;
