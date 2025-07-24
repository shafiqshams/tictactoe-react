import type { Cell } from '../types/board.types';

interface CellButtonProps {
   cellValue: Cell;
   rowIndex: number;
   colIndex: number;
   onClickCell: (rowIndex: number, colIndex: number) => void;
}

export const CellButton = ({ cellValue, rowIndex, colIndex, onClickCell }: CellButtonProps) => {

   const getCellClass = () => {
      if (cellValue === 'X') return 'cell x-cell';
      if (cellValue === 'O') return 'cell o-cell';
      return 'cell';
   };

   return (
      <button
         disabled={cellValue !== null}
         className={getCellClass()}
         onClick={() => onClickCell(rowIndex, colIndex)}>
         {cellValue}
      </button>
   )
}
