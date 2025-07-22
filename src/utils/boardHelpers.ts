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

export const getPrimaryDiagonal = (board: Board, rowIndex: number, colIndex: number): Cell[] => {
   return rowIndex === colIndex ? board.map((row, i) => row[i]) : []
}

export const getSecondaryDiagonal = (board: Board, rowIndex: number, colIndex: number): Cell[] => {
   return rowIndex + colIndex === board.length - 1 ? board.map((row, i) => row[board.length - (i + 1)]) : []
}

export const isBoardFull = (board: Board): boolean => {
   return board.every(row => row.every(cell => cell !== null))
}

export const getBoardMoveCount = (board: Board): number => {
   return board.flat().filter(cell => cell !== null).length;
}