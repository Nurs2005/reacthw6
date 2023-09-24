import React, { useState } from 'react';
import useStore from '../AppContext/AppReducer'; 
import { v4 as uuidv4 } from 'uuid';

export default function AddExpenseForm() {
  const addExpense = useStore((state) => state.addExpense);

  const [name, setName] = useState('');
  const [cost, setCost] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };  

    addExpense(expense);
    setName('');
    setCost('');
  }

  return (
    <form onSubmit={onSubmit}>
    <div className="row">
        <div className="col-sm">
            <label for='name'>Name</label>
            <input
            required='required'
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(event)=> setName(event.target.value)}
             />
        </div>
    </div>
    <div className="col-sm">
        <label for="cost">Cost</label>
        <input 
        required='required'
        type="text"
        className="form-control"
        id="cost"
        value={cost}
        onChange={(event)=> setCost(event.target.value)} />
    </div>
    <div className="col-sm">
        <button type="submit" className="btn btn-primary">Save</button>
    </div>
</form>
  );
}
