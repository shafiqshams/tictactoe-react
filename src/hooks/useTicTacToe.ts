import { useState } from "react";
import type { Board, Cell } from "../types/board.types";
import { getColumn, getDiagonals, getInitialBoard, getRow, getUniformValue, isBoardFull } from "../utils/boardHelpers";

export const useTicTacToe = (boardSize: number) => {

   const [board, setBoard] = useState<Board>(getInitialBoard(boardSize));
   const [isXNext, setIsXNext] = useState<boolean>(true);
   const [winner, setWinner] = useState<Cell>(null);

   const calculateWinner = (currentBoard: Board, rowIndex: number, colIndex: number): Cell => {

      const row = getRow(currentBoard, rowIndex);
      const col = getColumn(currentBoard, colIndex);
      const [primaryDiagonal, secondaryDiagonal] = getDiagonals(board);

      if (getUniformValue(row) || getUniformValue(col) || getUniformValue(primaryDiagonal) || getUniformValue(secondaryDiagonal)) {
         // Now we get the winner
         setWinner(currentBoard[rowIndex][colIndex])
      }

      return null;
   }

   const handleClick = (rowIndex: number, colIndex: number) => {
      if (winner || board[rowIndex][colIndex]) return;

      const newBoard: Board = [...board];
      newBoard[rowIndex][colIndex] = isXNext ? "X" : "O";
      setBoard(newBoard);
      setIsXNext(!isXNext);
      calculateWinner(newBoard, rowIndex, colIndex);
   }

   const getStatusMessage = (): string => {
      if (winner)
         return `Player ${winner} Wins!`;

      if (isBoardFull(board))
         return "Its a Draw!";

      return `Player ${isXNext ? "X" : "O"} turn`;
   }

   const resetGame = () => {
      setBoard(getInitialBoard(boardSize));
      setIsXNext(true);
      setWinner(null)
   }

   return {
      board,
      handleClick,
      getStatusMessage,
      resetGame
   }

}