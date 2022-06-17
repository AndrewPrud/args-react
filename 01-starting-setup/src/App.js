import Expenses from './components/Expenses.js';
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Paper",
      date: new Date(2022, 6, 16),
      amount: 20.00
    },
    {
      id: "e2",
      title: "Desk",
      date: new Date(2022, 4, 16),
      amount: 200.00
    },
    {
      id: "e3",
      title: "Lamp",
      date: new Date(2022, 3, 16),
      amount: 12.00
    },
    {
      id: "e4",
      title: "TV",
      date: new Date(2022, 5, 19),
      amount: 2000.00
    }
  ]
  
  return (
    <div>
      <div>
      <Expenses expense = {expenses}></Expenses>
      </div>
    </div>
  );
}

export default App;
