import { useState } from 'react'

import Header from './components/Header'
import UserInput from './components/UserInput'
import Result from './components/Result'

const USER_INPUTS = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10
}

function App () {
  const [userInputs, setUserInputs] = useState(USER_INPUTS)

  function handleUserInput (e, attribute) {
    setUserInputs(prevUserInputs => ({ ...prevUserInputs, [attribute]: parseFloat(e.target.value) }))
  }

  let resultTable = <Result userInputs={userInputs}/>
  if (userInputs.duration < 1) {
    resultTable = <p className='center'>Duration must be at least 1 year</p>
  }

  return (
    <>
      <Header/>
      <UserInput userInputs={userInputs} onUserInputChange={handleUserInput}/>
      {resultTable}
    </>
  )
}

export default App
