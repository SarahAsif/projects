import React, { useEffect, useRef, useState } from "react";
import "./board.css";

const Board = ({ reset, setReset, winner, setWinner }) => {
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const [turn, setTurn] = useState(0);
  const boardRef = useRef(null);
  const draw = (e, index) => {
    if (data[index - 1] === "" && winner === "") {
      const current = turn === 0 ? "X" : "O";
      e.target.innerText = current;
      data[index - 1] = current;
      setTurn(turn === 0 ? 1 : 0);
    }
  };
  useEffect(() => {
    setData(["", "", "", "", "", "", "", "", ""]);
    // //data.innerText = "";
    const cells = boardRef.current.children
      ? [...boardRef.current.children]
      : [];
    // for (let i = 0; i < 9; i++) {
    //   cells[i].innerText = "";
    // }

    if (Array.isArray(cells)) {
      cells.forEach((e) => (e.innerText = ""));
    }

    setTurn(0);
    setWinner("");
    setReset(false);
  }, [setReset, setWinner, reset]);

  useEffect(() => {
    const checkRow = () => {
      return (
        (data[0] === data[1] && data[0] === data[2] && data[0] !== "") ||
        (data[3] === data[4] && data[3] === data[5] && data[3] !== "") ||
        (data[6] === data[7] && data[6] === data[8] && data[6] !== "")
      );
    };

    // Checks for the win condition in cols

    const checkCol = () => {
      return (
        (data[0] === data[3] && data[0] === data[6] && data[0] !== "") ||
        (data[1] === data[4] && data[1] === data[7] && data[1] !== "") ||
        (data[2] === data[5] && data[2] === data[8] && data[2] !== "")
      );
    };

    // Checks for the win condition in diagonals

    const checkDiagonal = () => {
      return (
        (data[0] === data[4] && data[0] === data[8] && data[0] !== "") ||
        (data[2] === data[4] && data[2] === data[6] && data[2] !== "")
      );
    };

    const checkWin = () => {
      return checkRow() || checkCol() || checkDiagonal();
    };
    const checkTie = () => {
      let count = 0;
      data.forEach((cell) => {
        if (cell != "") {
          count++;
        }
      });
      return count === 9; // either return true or false
    };

    if (checkWin()) {
      setWinner(turn === 0 ? "Player 2 Wins!" : "Player 1 Wins!");
    } else if (checkTie()) {
      setWinner("It's a Tie!");
    }
  });

  return (
    <div ref={boardRef} className="board">
      <div className="input input-1" onClick={(e) => draw(e, 1)}></div>

      <div className="input input-2" onClick={(e) => draw(e, 2)}></div>

      <div className="input input-3" onClick={(e) => draw(e, 3)}></div>

      <div className="input input-4" onClick={(e) => draw(e, 4)}></div>

      <div className="input input-5" onClick={(e) => draw(e, 5)}></div>

      <div className="input input-6" onClick={(e) => draw(e, 6)}></div>

      <div className="input input-7" onClick={(e) => draw(e, 7)}></div>

      <div className="input input-8" onClick={(e) => draw(e, 8)}></div>

      <div className="input input-9" onClick={(e) => draw(e, 9)}></div>
    </div>
  );
};

export default Board;
