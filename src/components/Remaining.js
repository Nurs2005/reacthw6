
import React from 'react';
import useStore from '../AppContext/AppReducer'; 
 

export default function Remaining() {
  const expenses = useStore((state) => state.expenses);
  const budget = useStore((state) => state.budget);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

  return (
    <div className={`alert  ${alertType}`}>
      <span>Remaining: ${budget - totalExpenses}</span>
    </div>
  );
}
