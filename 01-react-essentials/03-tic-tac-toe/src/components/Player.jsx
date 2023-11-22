import { useState } from 'react'

export default function Player ({ initialName, symbol }) {
  const [isEditing, setIsEditiong] = useState(false)
  const [playerName, setPlayerName] = useState(initialName)

  function handleEditClick () {
    setIsEditiong(prevIsEditing => !prevIsEditing)
  }

  function handleChange (e) {
    setPlayerName(e.target.value)
  }

  let editablePlayerName = <span className='player-name'>{playerName}</span>

  if (isEditing) { // two way binding - cambiamos el estado con onchange, y lo volvemos a alimentar con playerName
    editablePlayerName = <input type='text' required value={playerName} onChange={handleChange}/>
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}
