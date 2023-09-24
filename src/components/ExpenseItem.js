
import React from 'react';
import { TiDelete } from 'react-icons/ti';
import useStore from '../AppContext/AppReducer'; 

export default function ExpenseItem({ id, name, cost }) {
  const deleteExpense = useStore((state) => state.deleteExpense);

  const handleClickDelete = () => {
    deleteExpense(id);
  }

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {name}
      <div>
        <span style={{ color: '#fff', background: 'blue' }} className="badge badge-primary badge-pill mr-3">
          ${cost}
        </span>
        <TiDelete size="1.5em" onClick={handleClickDelete}></TiDelete>
      </div>
    </li>
  );
}
