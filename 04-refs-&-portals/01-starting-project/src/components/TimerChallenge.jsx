import { useRef, useState } from 'react'
import ResultModal from './ResultModal'

function TimerChallenge ({ title, targetTime }) {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000)

  // usado como variable, si se utiliza una variable comun,
  // cada que el componente sea re renderizado esta se reinicia
  // De esta forma, cuando el componente es re renderizado
  // se mantiene como si fuera un estado, pero al asignarle un valor
  // no causa que se re renderize el componente a diferencia del estado
  const timer = useRef()
  const dialog = useRef()

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000

  if (timeRemaining <= 0) {
    clearInterval(timer.current)
    dialog.current.open()
  }

  function handleReset () {
    setTimeRemaining(targetTime * 1000)
  }

  function handleStart () {
    timer.current = setInterval(() => {
      setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10)
    }, 10)
  }

  function handleStop () {
    clearInterval(timer.current)
    dialog.current.open()
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset}/>
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        <p className={timerIsActive ? 'active' : undefined}>
          {timerIsActive ? 'Time is running...' : 'Timer inactive'}
        </p>
      </section>
    </>
  )
}

export default TimerChallenge
