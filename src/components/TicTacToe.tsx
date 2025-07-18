import { useTicTacToe } from "../hooks/useTicTacToe"


export const TicTacToe = () => {

   const { board, handleClick, resetGame, getStatusMessage } = useTicTacToe();

   return (
      <div className="game">
         <div className="status">
            {getStatusMessage()}
            <button className='reset-button' onClick={resetGame}>Reset Game</button>
         </div>

         <div className="board">
            {board.map((value, index) => {
               return (
                  <button
                     key={`cell-${index}`}
                     onClick={() => handleClick(index)}
                     disabled={value !== null} // Disable it, if its filled 
                     className="cell">
                     {value}
                  </button>
               )
            })}
         </div>
      </div>
   )
}
