import React from "react";
const ExpenseDate = (props) => {
    const month = props.d.toLocaleString('en-US',{ month: 'long'});
    const day = props.d.toLocaleString('en-US',{ day: '2-digit'});
    const year = props.d.getFullYear();
    return(
        
        <>
    <div className="date">
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
    </div>
        </>
    
    )
}
export default ExpenseDate;