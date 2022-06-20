import React from 'react';
import Expenses from './components/Expenses.js';
import NewExpense from './components/newExpense/NewExpense';
import './components/Expenses.css';
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
      <NewExpense> </NewExpense>
      <Expenses in = {expenses}> </Expenses>
    </div>
  );
}

export default App;
