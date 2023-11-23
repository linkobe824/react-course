export default function GameBoard ({ onSelectSquare, board }) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard)

  // // inmutabilidad - deep clones array within array
  // function handleSelectSquare (rowIndex, colIndex) {
  //   setGameBoard(prevGameBoard => {
  //     const updatedArray = [...prevGameBoard.map(innerArray => [...innerArray])]
  //     updatedArray[rowIndex][colIndex] = activePlayerSymbol
  //     return updatedArray
  //   })

  //   onSelectSquare()
  // }

  return (
    <ol id='game-board'>
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol}>
                    {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  )
}
