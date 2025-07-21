import { useState } from "react";
import type { Board, Cell } from "../types/board.types";
import {
   getInitialBoard,
   getRow,
   getColumn,
   getPrimaryDiagonal,
   getSecondaryDiagonal,
   getUniformValue,
   isBoardFull
} from "../utils/boardHelpers";

export const useTicTacToe = (boardSize: number) => {

   const [board, setBoard] = useState<Board>(getInitialBoard(boardSize));
   const [isXNext, setIsXNext] = useState<boolean>(true);
   const [winner, setWinner] = useState<Cell>(null);

   const calculateWinner = (currentBoard: Board, rowIndex: number, colIndex: number) => {

      const row = getRow(currentBoard, rowIndex);
      const col = getColumn(currentBoard, colIndex);
      const primaryDiagonal = getPrimaryDiagonal(currentBoard);
      const secondaryDiagonal = getSecondaryDiagonal(currentBoard, boardSize);

      const winningPatterns = [
         getUniformValue(row),
         getUniformValue(col),
         getUniformValue(primaryDiagonal),
         getUniformValue(secondaryDiagonal)
      ]

      const isWinnerExists = winningPatterns.find(winner => !!winner);

      if (isWinnerExists) {
         setWinner(currentBoard[rowIndex][colIndex])
      }
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