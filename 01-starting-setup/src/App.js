import Expenses from './components/Expenses';
function App() {
  const expenses = [{
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
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <p1>Hello World</p1>
      <Expenses in={expenses}></Expenses>
    </div>
  );
}

export default App;
