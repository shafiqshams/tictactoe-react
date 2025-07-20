import { useState } from "react";
import type { Board, Cell } from "../types/board.types";
import { getColumn, getDiagonals, getInitialBoard, getRow, getUniformValue, isBoardFull } from "../utils/boardHelpers";

export const useTicTacToe = (boardSize: number) => {

   const [board, setBoard] = useState<Board>(getInitialBoard(boardSize));
   const [isXNext, setIsXNext] = useState<boolean>(true);

   // Matching patterns
   const WINNING_PATTERNS = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2],
   ];

   // Condition to check who wins the game
   const calculateWinner = (currentBoard: BoardType[]) => {

      // Iterate over the winning patterns and check for winner.
      for (let i = 0; i < WINNING_PATTERNS.length; i++) {
         const [a, b, c] = WINNING_PATTERNS[i];
         if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c])
            return currentBoard[a];
      }

      return null;
   }

   const handleClick = (index: number) => {
      const winner = calculateWinner(board);
      if (winner || board[index]) return;

      const newBoard: BoardType[] = [...board];
      newBoard[index] = isXNext ? "X" : "O";
      setBoard(newBoard);
      setIsXNext(!isXNext);
   }

   const getStatusMessage = (): string => {
      const winner = calculateWinner(board);
      if (winner)
         return `Player ${winner} Wins!`;

      if (isBoardFull(board))
         return "Its a Draw!";

      return `Player ${isXNext ? "X" : "O"} turn`;
   }

   const resetGame = () => {
      setBoard(getInitialBoard(boardSize));
      setIsXNext(true);
   }

   return {
      board,
      calculateWinner,
      handleClick,
      getStatusMessage,
      resetGame
   }

}