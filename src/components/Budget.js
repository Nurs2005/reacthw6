import React, {useContext,useState} from "react";
import _default from "react-bootstrap/esm/Carousel";
import { AppContext } from "../context/AppContext";
export default function Budget() {
    const {budget} = useContext(AppContext)
    const {dispatch} = useContext(AppContext)
    const [isEditing, setIsEditing] = useState(false);
    const [budgett,setBudget] = useState('')
    const handleEditClick = () => {
      setIsEditing(true);
    };
  
    const onSubmit = (event) => {
        event.preventDefault();

        const newbudget ={
            budget:parseInt(budgett),
        }
        dispatch({
            type:'ADD_BUDGET',
            payload:newbudget,
        })
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
            onChange={(event)=> setBudget(event.target.value)} type="text" />
            <button type="submit" className="btn btn-primary">Save</button>
            </div>
            </div>
        </form>
      ) : (
        <div className="alert alert-secondary">
        <span>Budget: ${budget}</span> <button onClick={handleEditClick} className="btn btn-primary">Edit</button>
        </div>
      )}
        </div>

    );
  }