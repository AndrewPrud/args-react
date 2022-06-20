import React from 'react';
import './ExpenseDate.css';
function ExpenseDate(props){
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();
    return(
        <div>
            <div className = 'expense-date'>
                {month}</div>
            <div className = 'expense-date__day'>{day}</div>
            <div className = 'expense-date__month'>{year}</div>
        </div>
    )
}
export default ExpenseDate;