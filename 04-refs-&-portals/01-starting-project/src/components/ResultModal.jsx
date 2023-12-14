import { forwardRef, useImperativeHandle, useRef } from 'react' // para que el componente pueda recibir una ref (padre a hijo)
import { createPortal } from 'react-dom' // pone el componente en el elemento del DOM designado

const ResultModal = forwardRef(function ResultModal ({ remainingTime, targetTime, onReset }, ref) {
  const dialog = useRef()

  const userLost = remainingTime <= 0
  const formattedRemainigTime = (remainingTime / 1000).toFixed(2)
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100)

  useImperativeHandle(ref, () => {
    return {
      open () {
        dialog.current.showModal()
      }
    }
  })

  return createPortal(
    <dialog className="result-modal" ref={dialog} onClose={onReset}>
     {userLost ? <h2>You lost</h2> : <h2>Your Score: {score}</h2>}
      <p>The target time was <strong>{targetTime} seconds.</strong></p>
      <p>You stopped the timer with <strong>{formattedRemainigTime} seconds left.</strong></p>
      <form action="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
    , document.getElementById('modal'))
}
)

export default ResultModal
