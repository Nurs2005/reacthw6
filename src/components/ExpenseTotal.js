
import React from 'react';
import useStore from '../AppContext/AppReducer'; 


export default function ExpenseTotal() {
  const expenses = useStore((state) => state.expenses);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div className="alert alert-primary">
      <span>Spent so far: ${totalExpenses}</span>
    </div>
  );
}
