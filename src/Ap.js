import React ,{useState} from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./Expenses"
import "./style.css"
const DUMMY_EXPENSES = [
    {
        id: "1e",
        title: "Car Insurance",
        amount: 300.12,
        date: new Date(2019, 2, 8)
    },

    {
        id: "2e",
        title: "New Desk(Wooden)",
        amount: 550.12,
        date: new Date(2020, 2, 11)
    },

    {
        id: "3e",
        title: "New laptop(hp)",
        amount: 300.45,
        date: new Date(2021, 2, 15)
    },
]

const Ap= () => {
    const [expenses , setExpenses] =  useState(DUMMY_EXPENSES);
    const addExpenseHandler = (expense)=>{
        setExpenses(prevExpenses =>{
            return [expense , ...prevExpenses]
        })
    }

    return (
        <div className="whole-page">
            <NewExpense onAddExpense = {addExpenseHandler} />
            <Expenses items = {expenses} />
        </div>
        
    )
}

export default Ap;