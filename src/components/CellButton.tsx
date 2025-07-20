import type { Cell } from '../types/board.types';

interface CellButtonProps {
   cellValue: Cell;
   rowIndex: number;
   colIndex: number;
   onClickCell: (rowIndex: number, colIndex: number) => void;
}

export const CellButton = ({ cellValue, rowIndex, colIndex, onClickCell }: CellButtonProps) => {
   return (
      <button
         disabled={cellValue !== null}
         className="cell"
         onClick={() => onClickCell(rowIndex, colIndex)}>
         {cellValue}
      </button>
   )
}
