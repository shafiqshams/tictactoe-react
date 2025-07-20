import { useTicTacToe } from "../hooks/useTicTacToe"
import { BoardView } from "./BoardView";


export const TicTacToe = ({ boardSize }: { boardSize: number }) => {

   const { board, handleClick, resetGame, getStatusMessage } = useTicTacToe(boardSize);

   return (
      <div className="game">
         <div className="status">
            {getStatusMessage()}
            <button className='reset-button' onClick={resetGame}>Reset Game</button>
         </div>

         <BoardView board={board} onClick={handleClick} />
      </div>
   )
}
