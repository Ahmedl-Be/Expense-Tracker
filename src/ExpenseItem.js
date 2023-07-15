import React from "react";
import "./components/ExpenseItem.css";
import ExpenseDate from "./components/ExpenseDate";
const ExpenseItem= (props) => {
    return(
    <li>
        <div className="main">
            <ExpenseDate d = {props.date}/>
            <h3>{props.title}</h3>
            <h4>${props.amount}</h4>
        </div>
    </li>

    )
}
export default ExpenseItem;