import React from 'react';
import './ExpenseItem.css';

function ExpenseItem(){
    return (
        <div className="expense-item"><div className="expense-item__description">June 16, 2022</div>
            <h2>
                Expense 1
            </h2>
            <div className="expense-item__price">$3,000,000,021.</div>
        </div>
    );
}

export default ExpenseItem;