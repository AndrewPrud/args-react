import React, {useState} from 'react';
import Expenses from './components/Expenses.js';
import NewExpense from './components/newExpense/NewExpense.js';
function App() {
  const InitialExpenses = [
    {
      id: "e1",
      title: "Paper",
      date: new Date(2022, 6, 16),
      amount: 20.99
    },
    {
      id: "e2",
      title: "Desk",
      date: new Date(2022, 4, 16),
      amount: 200.50
    },
    {
      id: "e3",
      title: "Lamp",
      date: new Date(2022, 3, 16),
      amount: 12.25
    },
    {
      id: "e4",
      title: "TV",
      date: new Date(2022, 5, 19),
      amount: 2000.12
    }
  ]
  const [expenses, setExpenses] = useState(InitialExpenses);

  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  }
  
  return (
    <div>
      <div>
      <NewExpense onAddExpense = {addExpenseHandler}></NewExpense>
      <Expenses expense = {expenses}></Expenses>
      </div>
    </div>
  );
}

export default App;
