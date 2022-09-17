import React, { useState, createContext } from "react";
import Comp1 from "./components/Comp1";

export const MyContext = createContext();

const App = () => {
  const [data, setData] = useState("I'm a Data @ App");
  return (
    <>
      {/* this will provide "data" to all descendents of Comp1*/}
      <MyContext.Provider value={data}>
        <div>App</div>
        <Comp1 />
      </MyContext.Provider>
    </>
  );
};

export default App;
