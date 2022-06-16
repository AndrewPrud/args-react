import React from 'react';
import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className='expense-item'>
            <div>June 16, 2022</div>
            <div className='expense-item__description'>
                <h2>Netflix Subscription</h2>
            </div>
            <div className='expense-item__price'>$20.00</div>
        </div>
    );
}

export default ExpenseItem;