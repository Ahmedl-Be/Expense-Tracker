import React ,{useState} from "react";
import ExpensesFilter from "./components/NewExpense/ExpensesFilter";
import "./components/ExpensesFilter.css";
import ExpenseList from "./components/NewExpense/ExpenseList"
import ExpenseChart from "./components/Chart/ExpensesChart";
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);}

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div className="main-container">
            <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler} />
            <ExpenseChart expenses = {filteredExpenses} />
            <ExpenseList items={filteredExpenses} />
            
        </div>
    )
};
export default Expenses;