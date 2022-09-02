import React, { createContext, useState } from "react";
import UseEffect from "./UseEffect";
import "./App.css";
import UseContext from "./UseContext";
import ComA from "./ComA/ComA";
import Users from "./users";
const FirstName = createContext();
const LastName = createContext();
function App() {
  const array = ["red", "blue"];
  const [color, setColor] = useState(array);
  const style = "color: red";
  return (
    <div>
      <FirstName.Provider value={color[1]}>
        <LastName.Provider value={color[0]}>
          <Users />
        </LastName.Provider>
      </FirstName.Provider>
    </div>
  );
}

export default App;

export { FirstName, LastName };
