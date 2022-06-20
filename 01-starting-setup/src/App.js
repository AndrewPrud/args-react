import React, { useState } from 'react';
import Expenses from './components/Expenses';
import NewExpense from './components/newExpense/NewExpense.js';
function App() {
  const initialExpenses = [{
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2022, 7, 16),
  },
  {
    id: 'e2',
    title: 'Cheese',
    amount: 30000.19,
    date: new Date(2022, 7, 16),
  },
  {
    id: 'e3',
    title: 'Toilet',
    amount: 94.12,
    date: new Date(2022, 7, 16),
  },
  {
    id: 'e4',
    title: 'Hello Friend',
    amount: 30000.19,
    date: new Date(2022, 7, 16),
  }
  ];

  const[expenses, setExpenses] = useState(initialExpenses);

  function addExpenseHandler(expense){
    setExpenses((prevExpenses) => {
      return[...prevExpenses, expense]
    });
    }
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses in={expenses}></Expenses>
    </div>
  );
}

export default App;
