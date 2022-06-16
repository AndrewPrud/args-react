import React from 'react';
import './ExpenseItem.css';

function ExpenseItem(props){
    /*const expenseDate = new Date(2022, 6, 16);
    const expenseTitle = 'Cheese';
    const expenseAmount = 35322.01*/

    return (
        <div className="expense-item">
            <div>{props.date.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                </div>
            <div className="expense-item__price">${props.amount}</div>
        </div>
    );
}

export default ExpenseItem;