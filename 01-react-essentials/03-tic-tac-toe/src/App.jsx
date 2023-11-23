import { useState } from 'react'
import { WINNING_COMBINATIONS } from './winning-combinations'

import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Log'
import GameOver from './components/GameOver'

function deriveActivePlayer (gameTurns) {
  let currentPlayer = 'X'

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') currentPlayer = 'O'

  return currentPlayer
}

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function App () {
  // const [activePlayer, setActivePlayer] = useState('X') ya no se necesita para rerenderizar - no extra state
  const [gameTurns, setGameTurns] = useState([])

  const activePlayer = deriveActivePlayer(gameTurns)
  // se debe crear copia
  const gameBoard = [...initialGameBoard.map(innerArray => [...innerArray])]

  for (const turn of gameTurns) {
    const { square, player } = turn
    const { row, col } = square

    gameBoard[row][col] = player
  }

  let winner

  for (const combinations of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combinations[0].row][combinations[0].col]
    const secondSquareSymbol = gameBoard[combinations[1].row][combinations[1].col]
    const thirdquareSymbol = gameBoard[combinations[2].row][combinations[2].col]

    if (firstSquareSymbol &&
        firstSquareSymbol === secondSquareSymbol &&
        firstSquareSymbol === thirdquareSymbol) {
      winner = firstSquareSymbol
    }
  }

  function handleSelectSquare (rowIndex, colIndex) {
    // setActivePlayer(curActivePlayer => curActivePlayer === 'X' ? 'O' : 'X')
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns)
      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns]
      return updatedTurns
    })
  }

  const hasDraw = gameTurns.length === 9 && !winner

  function handleRestart () {
    setGameTurns([])
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player initialName='Player 1' symbol='X' isActive={activePlayer === 'X'}/>
          <Player initialName='Player 2' symbol='O' isActive={activePlayer === 'O'}/>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
      </div>

      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
