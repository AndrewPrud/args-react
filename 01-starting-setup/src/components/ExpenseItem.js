import React from 'react';
import './ExpenseItem.css';
function ExpenseItem(){
    const expenseDate = new Date(2022, 2, 28);
    const expenseTitle = 'Hulu Subscription';
    const expenseAmount = '$30.00';

    return(
        <div className = 'expense-item'>
            <div>{expenseDate.toISOString()}</div>
            <h2>
                {expenseTitle}
            </h2>
            <div>{expenseAmount}</div>
        </div>
    );
}

export default ExpenseItem;