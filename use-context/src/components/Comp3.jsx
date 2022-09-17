import React, { useContext } from "react";
import { MyContext } from "../App";

const Comp3 = () => {
  const data = useContext(MyContext);

  return <div>Comp3 with {data}</div>;
};

export default Comp3;
