
import React from 'react';
import ExpenseItem from './ExpenseItem';
import useStore from '../AppContext/AppReducer'; 


export default function ExpenseList() {
  const expenses = useStore((state) => state.expenses);

  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          name={expense.name}
          cost={expense.cost}
        />
      ))}
    </ul>
  );
}
