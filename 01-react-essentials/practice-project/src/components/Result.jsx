import { calculateInvestmentResults, formatter } from '../util/investment'

export default function Result ({ userInputs }) {
  const results = calculateInvestmentResults(userInputs)
  const initialInvestment = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Intertest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((data) => {
          const totalInterest = data.valueEndOfYear - data.annualInvestment * data.year - initialInvestment
          const investedCapital = initialInvestment + (data.annualInvestment * data.year)
          return (
            <tr key={data.year} className='center'>
              <td>{data.year}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          )
        })}
      </tbody>

    </table>
  )
}
