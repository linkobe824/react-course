import { useState } from 'react'

export default function Player ({ name, symbol }) {
  const [isEditing, setIsEditiong] = useState(false)

  let buttonAction = 'Edit'

  function handleClick () {
    isEditing ? setIsEditiong(false) : setIsEditiong(true)
  }

  isEditing ? buttonAction = 'Save' : buttonAction = 'Edit'

  return (
    <li>
      <span className="player">
        {!isEditing ? <span className='player-name'>{name}</span> : <input type='text' />}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{buttonAction}</button>
    </li>
  )
}
