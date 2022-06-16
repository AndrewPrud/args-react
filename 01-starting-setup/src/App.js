/* eslint-disable */
import ExspenseItem from './componets/ExspenseItem.js';

function App() {

  const expenses = [
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
    <div>
      <ExspenseItem
        title = {expenses[0].title}
        cost = {expenses[0].cost}
        date = {expenses[0].date}
      ></ExspenseItem>
      <ExspenseItem
        title = {expenses[1].title}
        cost = {expenses[1].cost}
        date = {expenses[1].date}
      ></ExspenseItem>
      <ExspenseItem
        title = {expenses[2].title}
        cost = {expenses[2].cost}
        date = {expenses[2].date}
      ></ExspenseItem>
      <ExspenseItem
        title = {expenses[3].title}
        cost = {expenses[3].cost}
        date = {expenses[3].date}
      ></ExspenseItem>
    </div>
  );
}

export default App;
