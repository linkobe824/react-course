export default function UserInput ({ userInputs, onUserInputChange }) {
  return (
    <div id="user-input" >
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number" value={userInputs.initialInvestment} onChange={(e) => onUserInputChange(e, 'initialInvestment')}required/>
        </p>
        <p>
          <label>Annual Investment</label>
          <input type="number" value={userInputs.annualInvestment} onChange={(e) => onUserInputChange(e, 'annualInvestment')} required/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input type="number" value={userInputs.expectedReturn} onChange={(e) => onUserInputChange(e, 'expectedReturn')} required/>
        </p>
        <p>
          <label>Duration</label>
          <input type="number" value={userInputs.duration} onChange={(e) => onUserInputChange(e, 'duration')} required/>
        </p>
      </div>
    </div>
  )
}
