export interface LoanInformation {
  loan: {
    requestAmount: number
    requestTenor: number
    interestRate: number
    interestRateIncentive: number
    interestRateAfterIncentive: number
    tenorIncentive: number
    loanPurpose: string
  }
  offer: {
    emi: number
    repaymentAmount: number
    principalAmount: number
    interestAmount: number
    calculationMethod: CalculationMethod
    loanRepaymentSchedule: {
      month: number
      referenceInterest: number
      interestAmount: number
      balance: number
      monthlyPrincipal: number
      monthlyRepayment: number
    }[]
  }
}

enum CalculationMethod {
  Debt = 'Debt',
  Paid = 'Paid',
}
