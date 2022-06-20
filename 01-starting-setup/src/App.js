import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/Newexpense';
function App() {
  
  const expenses = [
    {
      id: "e1",
      title: "Steam Purchase",
      date: new Date(2022, 4, 13),
      amount: 29.99
    },
    
    {
      id: "e2",
      title: "Epic Games Refund",
      date: new Date(2022, 5, 11),
      amount: 15.99
    },
    
    {
      id: "e3",
      title: "UPlay Cancelation",
      date: new Date(2022, 8, 10),
      amount: 18.99
    },
    
    {
      id: "e4",
      title: "Steam Refund",
      date: new Date(2022, 8, 11),
      amount: 10.49
    },
    
    ];


    function addExpenseHandler(expense){
        console.log(expense);

    }
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}></NewExpense>
      <Expenses in = {expenses} ></Expenses>
    </div>
  );
}

export default App;
