import React, {useState} from 'react';
import './ExpenseItem.css';
import './ExpenseDate.js';
import Card from './Card.js';
import ExpenseDate from './ExpenseDate';
function ExpenseItem(props){
    const [title, setTitle]= useState(props.title);
    function clickHandler(){
        setTitle("Updated Title");
    }

    return(
        <Card className = 'expense-item'>
            <ExpenseDate date = {props.date}></ExpenseDate>
            <div className = 'expense-item__description'> </div>
                 <h2>
                    {title}
                </h2>
            <div className = 'expense-item__price'>{props.amount}</div>
            <button onClick = {clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;