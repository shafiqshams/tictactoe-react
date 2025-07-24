import type { Board } from "../types/board.types"
import { CellButton } from "./CellButton";


interface BoardViewProps {
   board: Board;
   onClick: (rowIndex: number, colIndex: number) => void;
}

export const BoardView = ({ board, onClick }: BoardViewProps) => {
   return (
      <div className="board" style={{ gridTemplateColumns: `repeat(${board.length}, 1fr)` }}>
         {board.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
               <CellButton
                  key={`${rowIndex} - ${colIndex}`}
                  cellValue={cell}
                  rowIndex={rowIndex}
                  colIndex={colIndex}
                  onClickCell={onClick}
               />
            ))
         )}
      </div>
   )
}
