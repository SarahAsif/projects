import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Info from "./components/Info";

function App() {
  const [reset, setReset] = useState(false);
  const [winner, setWinner] = useState("");
  function resetBoard() {
    setReset("");
  }
  return (
    <div className="App">
      <div className={`winner ${winner === "" ? "shrink" : ""}`}>
        {/* Display the current winner */}
        <div className="winner-text">{winner}</div>
        {/* Button used to reset the board */}
        <button onClick={() => resetBoard()}>Reset Board</button>
      </div>
      <Board
        reset={reset}
        setReset={setReset}
        winner={winner}
        setWinner={setWinner}
      />
      <Info />
    </div>
  );
}

export default App;
