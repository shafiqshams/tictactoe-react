import { useState } from "react";
import type { Board, Cell } from "../types/board.types";
import {
   getInitialBoard,
   isBoardFull
} from "../utils/boardHelpers";
import { getWinningPatterns } from "../utils/getWinningPatterns";

export const useTicTacToe = (boardSize: number) => {

   const [board, setBoard] = useState<Board>(getInitialBoard(boardSize));
   const [isXNext, setIsXNext] = useState<boolean>(true);
   const [winner, setWinner] = useState<Cell>(null);

   const calculateWinner = (rowIndex: number, colIndex: number) => {

      const winningPatterns = getWinningPatterns(board, rowIndex, colIndex)
      const potentialWinner = winningPatterns.find(Boolean);

      if (potentialWinner) {
         setWinner(potentialWinner)
      }
   }

   const handleClick = (rowIndex: number, colIndex: number) => {
      if (winner || board[rowIndex][colIndex]) return;

      const newBoard: Board = [...board];
      newBoard[rowIndex][colIndex] = isXNext ? "X" : "O";
      setBoard(newBoard);
      setIsXNext(!isXNext);
      calculateWinner(rowIndex, colIndex);
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