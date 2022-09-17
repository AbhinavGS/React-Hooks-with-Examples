import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
  const prevName = useRef("");
  const inputElement = useRef();

  useEffect(() => {
    count.current = count.current + 1;
    prevName.current = inputValue;
  });

  function focusOnInput() {
    inputElement.current.focus();
    // we can also change value of the input field like below but that's not recommended
    // inputElement.current.value = "Some Value";
  }

  return (
    <>
      <input
        ref={inputElement}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>My name is: {inputValue}</h1>
      <h1>Previous input was: {prevName.current}</h1>
      <h1>Page renders: {count.current}</h1>
      <button onClick={focusOnInput}>FOCUS</button>
    </>
  );
};

export default App;
