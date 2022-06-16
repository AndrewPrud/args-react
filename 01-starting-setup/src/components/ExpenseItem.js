import React from 'react';
import './ExpenseItem.css';

function ExpenseItem(){
    const expenseDate = new Date(2022, 6, 16);
    const expenseTitle = 'Cheese';
    const expenseAmount = 35322.01

    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                </div>
            <div className="expense-item__price">${expenseAmount}</div>
        </div>
    );
}

export default ExpenseItem;