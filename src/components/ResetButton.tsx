export const ResetButton = ({ resetGame }: { resetGame: () => void }) => {
   return (
      <button className='reset-button' onClick={resetGame}>Reset Game</button>
   )
}
