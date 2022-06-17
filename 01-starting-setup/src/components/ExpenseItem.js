import React from 'react';
import './ExpenseItem.css';
import './ExpenseDate.js';
import ExpenseDate from './ExpenseDate';
import './Card.js';
import Card from './Card.js';

function ExpenseItem(props){
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
            </div>
            <div className="expense-item__price">${props.amount}</div>
        </Card>
    );
}

export default ExpenseItem;