import ExpenseItem from './components/ExpenseItem';
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
      <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
      </div>
    </div>
  );
}

export default App;
