import React from 'react';
import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div>
            <div className='expense-item'>June 16, 2022</div>
            <h1>
                Netflix Subscription
            </h1>
            <div className='expense-item'>$20.00</div>
        </div>
    );
}

export default ExpenseItem;