import React, {useState} from 'react';
import Expense from './componets/Expense.js';
import NewExpense from './componets/newExpense/NewExpense.js';

function App() {

  const InitialExpenses = [
    {
    id: "e1",
    title: "X-Bow",
    date: new Date(2021, 6, 16), 
    cost: 6
  },
  {
    id: "e2",
    title: "Tesla",
    date: new Date(2020, 2, 16), 
    cost: 4
  },
  {
    id: "e3",
    title: "Log",
    date: new Date(2022, 7, 16), 
    cost: 2
  },
  {
    id: "e4",
    title: "Fire Ball",
    date: new Date(2022, 1, 16), 
    cost: 4
  }
]

const [expenses, setExpenses] = useState(InitialExpenses);

function addExpensehandler(expense) {
  setExpenses((prevExpenses) => {
    return [...prevExpenses, expense];
  })
}

  return (
    <div>
      <div>
      <NewExpense onAddExpense = {addExpensehandler}></NewExpense>
      <Expense bruh = {expenses}></Expense>
      </div>
    </div>
  )
}

export default App;
