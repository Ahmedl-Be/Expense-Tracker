import React from "react";
import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = (event)=>{
    setEnteredTitle(event.target.value);
        }
    
    const amountChangeHandler = (event)=>{
        setEnteredAmount(event.target.value)
        }
    
    const dateChangeHandler = (event)=>{
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event)=>{
        // prevent the default reload 
        event.preventDefault();
        const expenseDate = {
            title : enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };
        props.onSaveExpenseDate(expenseDate);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    return(
        <form onSubmit={submitHandler}>
        <div className="new-ex-controls">
            <div className="new-ex-control">
                <label>Title</label>
                <input type= "text" value={enteredTitle}
                onChange={titleChangeHandler}/>
            </div>
            <div className="new-ex-control">
                <label>Amount</label>
                <input type= "number" min="0.01" step="0.01"
                value={enteredAmount}
                onChange={amountChangeHandler} />
            </div>
            <div className="new-ex-control">
                <label>Date</label>
                <input type= "date" min="2019-01-01" max="2022-12-31"
                value={enteredDate}
                onChange={dateChangeHandler}/>
            </div>
        </div>
            <div className="btn-submit">
            <button type="submit" >Add Expense</button>
            </div>
    </form>
    )
}

export default ExpenseForm;