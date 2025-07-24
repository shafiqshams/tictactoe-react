import { useTicTacToe } from "../hooks/useTicTacToe"
import { BoardView } from "./BoardView";
import { GameStatus } from "./GameStatus";
import { ResetButton } from "./ResetButton";


export const TicTacToe = ({ boardSize }: { boardSize: number }) => {

   const { board, handleClick, resetGame, getStatusMessage } = useTicTacToe(boardSize);

   return (
      <div className="game">
         <div>
            <BoardView board={board} onClick={handleClick} />

            <div className="status-footer">
               <GameStatus status={getStatusMessage()} />
               <ResetButton resetGame={resetGame} />
            </div>
         </div>
      </div>
   )
}
