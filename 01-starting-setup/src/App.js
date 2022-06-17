import Expense from './componets/Expense.js';

function App() {

  const expense = [
    {
    id: "e1",
    title: "X-Bow",
    date: new Date(2022, 6, 16), 
    cost: 6
  },
  {
    id: "e2",
    title: "Tesla",
    date: new Date(2022, 2, 16), 
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

  return (
    <Expense props = {expense}></Expense>
  );
}

export default App;
