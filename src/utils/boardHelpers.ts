import type { Board, Cell, Column, Row } from "../types/board.types"

export const getInitialBoard = (boardSize: number): Board => {
   return Array(boardSize)
      .fill(null)
      .map(() => Array(boardSize).fill(null));
}

export const getRow = (board: Board, rowIndex: number): Row => {
   return board[rowIndex];
}

export const getColumn = (board: Board, columnIndex: number): Column => {
   return board.map(row => row[columnIndex])
}

export const getDiagonals = (board: Board): [Row, Column] => {
   const primaryDiagonal = [], secondaryDiagonal = [];

   for (let i = 0; i < board.length; i++) {
      primaryDiagonal[i] = board[i][i];
      secondaryDiagonal[i] = board[i][2 - i];
   }

   return [primaryDiagonal, secondaryDiagonal];
}

export const isBoardFull = (board: Board): boolean => {
   return board.every(row => row.every(cell => cell !== null))
}

export const getUniformValue = (array: Row | Column): Cell => {
   const uniqueSet = new Set(array);
   if (uniqueSet.size !== 1 || uniqueSet.has(null))
      return null;

   const [value] = uniqueSet;
   return value;
}