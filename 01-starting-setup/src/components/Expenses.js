import React from 'react';
import './ExpenseItem';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import './Card.js';
import Card from './Card.js';

function Expenses(props){
    return (
    <Card className='expenses'>
      <ExpenseItem
        title={props.in[0].title}
        amount={props.in[0].amount}
        date={props.in[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.in[1].title}
        amount={props.in[1].amount}
        date={props.in[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.in[2].title}
        amount={props.in[2].amount}
        date={props.in[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.in[3].title}
        amount={props.in[3].amount}
        date={props.in[3].date}
      ></ExpenseItem>
    </Card>
    );
}

export default Expenses;