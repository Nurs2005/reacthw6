import React, {useContext} from "react";
import { TiDelete } from 'react-icons/ti';
import { AppContext } from "../context/AppContext";
export default function ExpenseItem(props) {
    const {dispatch} = useContext(AppContext)
    const handleClickDelete = ()=>{
        dispatch({
            type:'DELETE_EXPENSE',
            payload:props.id
        })
    }
    return (
        <li class='list-group-item d-flex justify-content-between align-items-center'>
            {props.name}
            <div>
                <span style={{ color: '#fff',background:'blue' }}className="badge badge-primary badge-pill mr-3">
                    ${props.cost}   
                </span>
                <TiDelete size='1.5em' onClick={handleClickDelete}></TiDelete>
            </div>
        </li>
    );
  }