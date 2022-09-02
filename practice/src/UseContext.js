import React, { createContext, useContext, useEffect } from "react";
import UseEffectAPI from "./UseEffectAPI";

const UseContext = () => {
  const context = createContext("hi");

  return;
  <UseEffectAPI value={context} />;
};

export default UseContext;
