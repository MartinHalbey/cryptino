import React from 'react';

function LoanList() {
  // for now here is only dummy data for demonstration
  const loans = [
    { id: 1, amount: 1000, interestRate: 5 },
    { id: 2, amount: 2000, interestRate: 7 },
    { id: 3, amount: 1500, interestRate: 6 },
  ];

  return (
    <div>
      <h2>Available Loans</h2>
      <ul>
        {loans.map((loan) => (
          <li key={loan.id}>
            Loan Amount: ${loan.amount} | Interest Rate: {loan.interestRate}%
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LoanList;
