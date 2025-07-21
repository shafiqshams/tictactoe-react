import type { Board, Cell, Column, Row } from "../types/board.types";
import { getColumn, getPrimaryDiagonal, getRow, getSecondaryDiagonal } from "./boardHelpers";

export const getWinningPatterns = (currentBoard: Board, rowIndex: number, colIndex: number): Cell[] => {
   const row = getRow(currentBoard, rowIndex);
   const col = getColumn(currentBoard, colIndex);
   const primaryDiagonal = getPrimaryDiagonal(currentBoard, rowIndex, colIndex);
   const secondaryDiagonal = getSecondaryDiagonal(currentBoard, rowIndex, colIndex);

   const winningPatterns = [
      getUniformValue(row),
      getUniformValue(col),
      getUniformValue(primaryDiagonal),
      getUniformValue(secondaryDiagonal)
   ]

   return winningPatterns;
}

export const getUniformValue = (array: Row | Column): Cell => {
   const uniqueSet = new Set(array);
   if (uniqueSet.size !== 1 || uniqueSet.has(null))
      return null;

   const [value] = uniqueSet;
   return value;
}