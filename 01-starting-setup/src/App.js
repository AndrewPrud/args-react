import ExpenseItem from './components/ExpenseItem.js'
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
      <h2>Let's get started!</h2>
      <p1>Hello World</p1>
      <ExpenseItem>
        title = {expenses[0].title}
        amount = {expenses[0].amount}
        date = {expenses[0].date}
      </ExpenseItem>
      <ExpenseItem>
        title = {expenses[1].title}
        amount = {expenses[1].amount}
        date = {expenses[1].date}
      </ExpenseItem>
      <ExpenseItem>
        title = {expenses[2].title}
        amount = {expenses[2].amount}
        date = {expenses[2].date}
      </ExpenseItem>
      <ExpenseItem>
        title = {expenses[3].title}
        amount = {expenses[3].amount}
        date = {expenses[3].date}
      </ExpenseItem>
    </div>
  );
}

export default App;
