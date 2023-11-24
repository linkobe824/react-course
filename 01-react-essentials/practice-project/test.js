function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = []
  let investmentValue = initialInvestment

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100)
    investmentValue += interestEarnedInYear + annualInvestment
    annualData.push({
      year: i + 1, // year identifier
      interest: interestEarnedInYear, // the amount of interest earned in this year
      valueEndOfYear: investmentValue, // investment value at end of year
      annualInvestment, // investment added in this year
    })
  }

  return annualData
}

console.log(
  calculateInvestmentResults({
    initialInvestment: 1,
    annualInvestment: 1,
    expectedReturn: 1,
    duration: 1,
  })
)
