const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

export default function GameBoard ({ onSelectSquare, turns }) {
  const gameBoard = initialGameBoard

  for (const turn of turns) {
    const { square, player } = turn
    const { row, col } = square

    gameBoard[row][col] = player
  }
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
      {gameBoard.map((row, rowIndex) => (
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
