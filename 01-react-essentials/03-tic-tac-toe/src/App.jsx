import { useState } from 'react'
import { WINNING_COMBINATIONS } from './winning-combinations'

import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Log'
import GameOver from './components/GameOver'

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
}

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function deriveActivePlayer (gameTurns) {
  let currentPlayer = 'X'

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') currentPlayer = 'O'

  return currentPlayer
}

function deriveWinner (players, gameBoard) {
  let winner

  for (const combinations of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combinations[0].row][combinations[0].col]
    const secondSquareSymbol = gameBoard[combinations[1].row][combinations[1].col]
    const thirdquareSymbol = gameBoard[combinations[2].row][combinations[2].col]

    if (firstSquareSymbol &&
        firstSquareSymbol === secondSquareSymbol &&
        firstSquareSymbol === thirdquareSymbol) {
      winner = players[firstSquareSymbol]
    }
  }
  return winner
}

function deriveGameBoard (gameTurns) {
  // se debe crear copia sino estas modificando el original
  const gameBoard = [...INITIAL_GAME_BOARD.map(innerArray => [...innerArray])]

  for (const turn of gameTurns) {
    const { square, player } = turn
    const { row, col } = square

    gameBoard[row][col] = player
  }

  return gameBoard
}

function App () {
  // const [activePlayer, setActivePlayer] = useState('X') ya no se necesita para rerenderizar - no extra state
  const [players, setPlayers] = useState(PLAYERS)
  const [gameTurns, setGameTurns] = useState([])

  const activePlayer = deriveActivePlayer(gameTurns)

  const gameBoard = deriveGameBoard(gameTurns)

  function handleSelectSquare (rowIndex, colIndex) {
    // setActivePlayer(curActivePlayer => curActivePlayer === 'X' ? 'O' : 'X')
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns)
      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns]
      return updatedTurns
    })
  }

  const winner = deriveWinner(players, gameBoard)

  const hasDraw = gameTurns.length === 9 && !winner

  function handleRestart () {
    setGameTurns([])
  }

  function handlePlayerNameChange (symbol, newName) {
    setPlayers(prevPlayers => ({ ...prevPlayers, [symbol]: newName }))
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player initialName={PLAYERS.X} symbol='X' isActive={activePlayer === 'X'} onPlayerNameChange={handlePlayerNameChange}/>
          <Player initialName={PLAYERS.O} symbol='O' isActive={activePlayer === 'O'} onPlayerNameChange={handlePlayerNameChange}/>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
      </div>

      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
