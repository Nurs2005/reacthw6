
import React, { useState } from 'react';
import useStore from '../AppContext/AppReducer'; 
export default function Budget() {
  const budget = useStore((state) => state.budget);
  const setBudget = useStore((state) => state.setBudget);

  const [isEditing, setIsEditing] = useState(false);
  const [budgett, setBudgett] = useState('');

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    setBudget(parseInt(budgett));
    setIsEditing(false);
  }

  return (
    <div>
      {isEditing ? (
        <form onSubmit={onSubmit} className="alert alert-secondary">
          <div className="row d-flex justify-content-around align-items-center">
            <div className="col-sm">
              <input
                value={budgett}
                onChange={(event) => setBudgett(event.target.value)}
                type="text"
              />
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div className="alert alert-secondary">
          <span>Budget: ${budget}</span>{' '}
          <button onClick={handleEditClick} className="btn btn-primary">
            Edit
          </button>
        </div>
      )}
    </div>
  );
}
