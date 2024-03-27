import React from 'react';

function TransactionHistory() {
  // for now its only dummy data for demonstration
  const transactions = [
    { id: 1, type: 'Deposit', amount: 500 },
    { id: 2, type: 'Withdrawal', amount: 200 },
    { id: 3, type: 'Loan Payment', amount: 100 },
  ];

  return (
    <div>
      <h2>Transaction History</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.type}: ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionHistory;
