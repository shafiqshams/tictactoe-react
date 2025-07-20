import type { Board } from "../types/board.types"
import { CellButton } from "./CellButton";


interface BoardViewProps {
   board: Board;
   onClick: (rowIndex: number, colIndex: number) => void;
}

export const BoardView = ({ board, onClick }: BoardViewProps) => {
   console.log(board);
   return (
      <div className="board">
         {board.map((row, rowIndex) =>
            row.map((cell, colIndex) =>
               <CellButton
                  key={`${rowIndex} - ${colIndex}`}
                  cellValue={cell}
                  rowIndex={rowIndex}
                  colIndex={colIndex}
                  onClickCell={onClick}
               />
            ))}
      </div>
   )
}
