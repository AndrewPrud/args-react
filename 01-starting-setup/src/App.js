import ExpenseItem from './components/ExpenseItem.js';
import React from 'react';
function App() {
  const expenses = [
    {
      id: 'a1',
      title: 'Paper',
      date: new Date(2022, 4, 15),
      amount: '$30.99'
    },
    {
      id: 'a2',
      title: 'Pencil',
      date: new Date(2022, 6, 19),
      amount: '$12.00'
    },
    {
      id: 'a3',
      title: 'Pen',
      date: new Date(2022, 6, 29),
      amount: '$13.00'
    },
    {
      id: 'a4',
      title: 'box',
      date: new Date(2022, 7, 11),
      amount: '$14.00'
    }
  ]
  return(
    <div>
      <h2>Let's get started!</h2>
      <p1>Hello World</p1>
      <ExpenseItem
        title = {expenses[0].title}
        amount = {expenses[0].amount}
        date = {expenses[0].date}
         ></ExpenseItem>
      <ExpenseItem
        title = {expenses[1].title}
        amount = {expenses[1].amount}
        date = {expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title = {expenses[2].title}
        amount = {expenses[2].amount}
        date = {expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title = {expenses[3].title}
        amount = {expenses[3].amount}
        date = {expenses[3].date}
         ></ExpenseItem>
    </div>
  );
}

export default App;
