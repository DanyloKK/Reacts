import {useEffect, useState} from "react";
import {calculateWinner} from "../helpers/calculateWinner.js";

const initValue = Array(9).fill(null);
export const useWinner = () => {
  const [squares, setSquares] = useState(initValue);
  const [xIsNext, setXIsNext] = useState(true);
  const handleUpdate = i => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const newSquares = squares.slice()
    newSquares[i] = xIsNext ? 'X' : '0';
    setSquares(newSquares);
    setXIsNext(!xIsNext)
  }
  const handleClear = () => {
    setSquares(initValue)
    setXIsNext(true);
  }

  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner) {
      alert(`Winner ${winner}`)
    }
  }, [squares])

  return {
    handleUpdate,
    handleClear,
    squares
  }
}
